import {z} from "zod";

const portSchema = z.coerce.number().min(1).max(65535);

export const PORT = portSchema.parse(process.env.PORT) || 5002;