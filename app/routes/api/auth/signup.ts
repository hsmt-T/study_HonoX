import { Hono } from 'hono'
import { db } from '../../../db'
import { users } from '../../../db/schema/user'
import { signupSchema } from '../../../schema/auth'

const api = new Hono()

api.post('/', async (c) => {
  try {
    const body = await c.req.json()

    const parsed = signupSchema.safeParse(body)
    if (!parsed.success) {
      return c.json({ error: 'Invalid fields' }, 400)
    }

    const [created] = await db
      .insert(users)
      .values(parsed.data)
      .returning()   // ← ★ 必須

    return c.json({ user: created }, 201)

  } catch (e) {
    console.error('SIGNUP ERROR 👉', e)
    return c.json({ error: 'Signup failed' }, 500)
  }
})

export default api
