import { boolean } from "drizzle-orm/gel-core";
import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { date } from "drizzle-orm/pg-core";
import { datetime } from "drizzle-orm/singlestore-core";

export const loginTable = mysqlTable("users_table", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({length: 255}).notNull(),
  contact: varchar({length: 10}).notNull().unique(),
  isAccountVerified: boolean().default(false).notNull(),
  verifyOTP: varchar({length: 6}).default(""),
  verifyOTPExpireAt: datetime().defaultNow(),
  resetOTP: varchar({length: 6}).default(""),
  resetOTPExpireAt: datetime().defaultNow()

});
export const productsTable = mysqlTable("products", {

});
export const schemesTable = mysqlTable("gov_schemes", {

});
