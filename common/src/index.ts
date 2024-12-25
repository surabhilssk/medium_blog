import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
});

//type inference
export type SignupInput = z.infer<typeof signupInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})
 //type inference
export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),
})

//type inference
export type UpdateBlogInput = z.infer<typeof updateBlogInput>