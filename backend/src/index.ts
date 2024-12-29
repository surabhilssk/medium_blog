import { Hono } from 'hono'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

app.use("/*", cors());
//ROUTING
app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);


export default app
