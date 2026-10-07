import bcrypt from 'bcrypt'
import prisma from '../db/prisma.js'
import {generateAccessToken} from '../utils/jwt.js'
import { createSession } from './session.service.js'

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
const loginService = async (identifier, password, userAgent, ipAddress) => {
  const isEmail = identifier.includes('@')

  const user = await prisma.users.findFirst({
    where: isEmail
      ? { email: identifier }
      : { username: identifier },
  })

  if (!user) {
    const error = new Error('Invalid credentials')
    error.statusCode = 401
    throw error
  }
  if (!user.password_hash) {
  const error = new Error(
    'This account uses Google login. Please continue with Google.',
  )
  error.statusCode = 400
  throw error
}
  const isPasswordValid = await bcrypt.compare(
    password,
    user.password_hash,
  )

  if (!isPasswordValid) {
    const error = new Error('Invalid credentials')
    error.statusCode = 401
    throw error
  }
  const accessToken = generateAccessToken(user.id)
  const refreshToken = await createSession(user.id,userAgent,ipAddress)
  return {
  accessToken,
  refreshToken,
  user: {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  },
}
}

export { registerService,loginService}