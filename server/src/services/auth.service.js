import bcrypt from 'bcrypt'
import prisma from '../db/prisma.js'

const registerService = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password_hash: hashedPassword,
    },
  })

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    message: 'User registered successfully',
  }
}

export { registerService }