import { drizzle } from "drizzle-orm/mysql2";
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

const db = drizzle(process.env.DATABASE_URL);
