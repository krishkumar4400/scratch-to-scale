import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address").trim(),

  password: z.string().min(6, "Password must be at least 8 charactres"),
});

export const registerSchema = z.object({
  name: z.string().nonempty().trim(),
  email: z.email("Invalid email address").trim(),

  password: z.string().min(6, "Password must be at least 8 charactres"),
});

export type LoginBody = z.infer<typeof loginSchema>;
export type RegisterBody = z.infer<typeof registerSchema>;
