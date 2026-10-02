import { z } from 'zod'

const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters'),

  email: z
    .string()
    .trim()
    .email('Please provide a valid email')
    .toLowerCase(),
  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be at most 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),
})
 const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, 'Email or username is required'),

  password: z
    .string()
    .min(1, 'Password is required'),
})

export { registerSchema,loginSchema}