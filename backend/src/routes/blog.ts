import { Hono } from "hono";

export const blogRouter = new Hono();

blogRouter.post('/g', (c) => {
    return c.text('Hello Hono!')
});
  
blogRouter.put('/', (c) => {
    return c.text('Hello Hono!')
});
  
blogRouter.get('/bulk', (c) => {
    return c.text('Hello Hono!')
})