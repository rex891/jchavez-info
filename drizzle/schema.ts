import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().default("not_provided"),
  email: text().notNull(),
});

export const schema = {
  users,
};
