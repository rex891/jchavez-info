import { integer, pgTable, text } from "drizzle-orm/pg-core";

// Database schema definitions

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().default("not_provided"),
  email: text().notNull(),
});

export const schema = {
  users,
};
