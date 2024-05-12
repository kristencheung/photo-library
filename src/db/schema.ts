import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const usersTable = pgTable("users_table", {
  id: uuid("id").defaultRandom().unique().primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  profileImage: text("profile_image"),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
})

export const elementsTable = pgTable("elements_table", {
  id: uuid("id").defaultRandom().unique().primaryKey(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect
export type InsertPost = typeof elementsTable.$inferInsert
export type SelectPost = typeof elementsTable.$inferSelect
