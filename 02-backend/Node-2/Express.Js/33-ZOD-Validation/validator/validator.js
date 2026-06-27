import z, { email } from 'zod';

export const loginSchema = z.object({
  email: z.string().nonempty().email().min(12).max(100),
  password: z.string().min(6).max(100).nonempty(),
});

export const registerSchema = loginSchema.extend({
    name: z.string().trim().min(3, {message: "Name must be of atleast 3 characters"}).max(100, {message: "Name should not have more than 100 characters"}),
});

