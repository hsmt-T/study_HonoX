import { z } from 'zod'

export const UserSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(8),
    message: z.string(),
})

export const CreateUserSchema = z.object({
    name: z.string().min(2).max(8),
    message: z.string().optional(),
})

export type User = z.infer<typeof UserSchema>
export type CreateUserSchema = z.infer<typeof CreateUserSchema>