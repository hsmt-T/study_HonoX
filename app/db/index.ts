import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

const sql = postgres(process.env.DATABASE_URL!, {
    ssl: 'require',
    max: 1,           // ← poolerでは重要
    idle_timeout: 20,
    connect_timeout: 10,
})

export const db = drizzle(sql)
