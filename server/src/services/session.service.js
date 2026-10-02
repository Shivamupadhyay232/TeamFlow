import prisma from '../db/prisma.js'
import {generateRefreshToken,hashRefreshToken,} from '../utils/refreshToken.js'
import { generateAccessToken } from '../utils/jwt.js'

const createSession = async (userId, userAgent, ipAddress) => {
  const refreshToken = generateRefreshToken()
  const refreshTokenHash = hashRefreshToken(refreshToken)

  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7)

  await prisma.user_sessions.create({
    data: {
      user_id: userId,
      refresh_token_hash: refreshTokenHash,
      user_agent: userAgent,
      ip_address: ipAddress,
      expires_at: expiresAt,
    },
  })

  return refreshToken
}
const findValidSession = async (refreshToken) => {
  const refreshTokenHash = hashRefreshToken(refreshToken)

  const session = await prisma.user_sessions.findFirst({
    where: {
      refresh_token_hash: refreshTokenHash,
    },
  })

  if (!session) {
    const error = new Error('Invalid refresh token')
    error.statusCode = 401
    throw error
  }

  if (session.revoked_at) {
    const error = new Error('Refresh token has been revoked')
    error.statusCode = 401
    throw error
  }

  if (session.expires_at <= new Date()) {
    const error = new Error('Refresh token has expired')
    error.statusCode = 401
    throw error
  }

  return session
}
const refreshAccessToken = async (refreshToken) => {
  const session = await findValidSession(refreshToken)

  const accessToken = generateAccessToken(session.user_id)

  return accessToken
}
export { createSession , findValidSession , refreshAccessToken }