import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    password: text("password").notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});
