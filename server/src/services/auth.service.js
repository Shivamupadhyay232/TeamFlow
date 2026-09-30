import bcrypt from 'bcrypt'

import prisma from '../db/prisma.js'

const registerService = async (name, username, email, password) => {
  const existingEmail = await prisma.users.findUnique({
    where: {
      email,
    },
  })

  if (existingEmail) {
    const error = new Error('Email is already registered')
    error.statusCode = 409
    throw error
  }

  const existingUsername = await prisma.users.findUnique({
    where: {
      username,
    },
  })

  if (existingUsername) {
    const error = new Error('Username is already taken')
    error.statusCode = 409
    throw error
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.create({
    data: {
      name,
      username,
      email,
      password_hash: hashedPassword,
    },
  })

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    message: 'User registered successfully',
  }
}

export { registerService }