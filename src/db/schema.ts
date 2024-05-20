import { pgSchema, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"

const authSchema = pgSchema("auth")

const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
})

export const accounts = pgTable("accounts", {
  id: uuid("id")
    .references(() => users.id)
    .primaryKey(),
  name: text("name").notNull(),
  profileImage: text("profile_image"),
  email: text("email").notNull().unique(),
  userName: text("user_name").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const insertAccountSchema = createInsertSchema(accounts, {
  id: z.string().uuid(),
  name: z.string(),
  email: (schema) => schema.email.email(),
  userName: z.string(),
})

export const selectAccountSchema = createSelectSchema(accounts, {
  id: z.string().uuid(),
  email: (schema) => schema.email.email(),
  userName: z.string(),
})

export const elements = pgTable("elements", {
  id: uuid("id").defaultRandom().unique().primaryKey(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  accountId: uuid("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export type InsertAccount = typeof accounts.$inferInsert
export type SelectAccount = typeof accounts.$inferSelect
export type InsertElement = typeof elements.$inferInsert
export type SelectElement = typeof elements.$inferSelect
