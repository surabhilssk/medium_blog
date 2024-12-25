import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, jwt, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async(c, next) => {
    const header = c.req.header("Authorization") || "";
      const token = header.split(" ")[1];
      const user = await verify(token, c.env.JWT_SECRET);
      if(user){
        c.set("userId", String(user.id));
        await next();
      }else{
        c.status(403);
        return c.json({error: "unauthorized"});
      }
})

blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const authorId = c.get("userId");
    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        id: blog.id
    })
});
  
blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
});

//implement pagination
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    });
    try{
        const blogs = await prisma.blog.findMany();
        return c.json({blogs});
    }catch(e){
        c.status(411);
        return c.json({
            message: "Error fetching blogs"
        });
    }
})

blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    try{
    const blog = await prisma.blog.findFirst({
        where: {
            id: String(id)
        }
    })

    return c.json({
        blog
    })}catch(e){
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        })
    }
});
  

