import z from 'zod';

export const registerSchema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: "Confirm password" 
});

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6, "Password must be atleast 6 characters")
});