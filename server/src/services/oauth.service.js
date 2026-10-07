import { OAuth2Client } from 'google-auth-library'
import prisma from '../db/prisma.js'
import { generateAccessToken } from '../utils/jwt.js'
import { createSession } from './session.service.js'
import generateUniqueUsername from '../utils/username.js'
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL,
)
const getGoogleAuthUrl = () => {
  return googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'openid',
      'email',
      'profile',
    ],
    prompt: 'consent',
  })
}
const handleGoogleCallback = async (
  code,
  userAgent,
  ipAddress,
) => {
  const { tokens } = await googleClient.getToken(code)

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  const payload = ticket.getPayload()

  if (!payload.email || !payload.email_verified) {
    const error = new Error(
      'Google account does not have a verified email',
    )
    error.statusCode = 400
    throw error
  }

  return loginWithOAuth(
    'google',
    payload.sub,
    payload.name,
    payload.email,
    userAgent,
    ipAddress,
  )
}
const findOAuthAccount = async (provider, providerAccountId) => {
  return prisma.oauth_accounts.findUnique({
    where: {
      provider_provider_account_id: {
        provider,
        provider_account_id: providerAccountId,
      },
    },
    include: {
      users: true,
    },
  })
}
const createOAuthAccount = async (
  userId,
  provider,
  providerAccountId,
) => {
  return prisma.oauth_accounts.create({
    data: {
      user_id: userId,
      provider,
      provider_account_id: providerAccountId,
    },
  })
}
const createOAuthUser = async (
  name,
  email,
  provider,
  providerAccountId,
) => {
  const username = await generateUniqueUsername(name)
  const user = await prisma.users.create({
    data: {
      name,
      username,
      email,
      password_hash: null,
    },
  })

  await createOAuthAccount(
    user.id,
    provider,
    providerAccountId,
  )

  return user
}
const findUserByEmail = async (email) => {
  return prisma.users.findUnique({
    where: {
      email,
    },
  })
}
const loginWithOAuth = async (
  provider,
  providerAccountId,
  name,
  email,
  userAgent,
  ipAddress,
) => {
  let user

  const existingOAuthAccount = await findOAuthAccount(
    provider,
    providerAccountId,
  )

  if (existingOAuthAccount) {
    user = existingOAuthAccount.users

    if (!user.username) {
      const username = await generateUniqueUsername(user.name)

      user = await prisma.users.update({
        where: {
          id: user.id,
        },
        data: {
          username,
        },
      })
    }
  } else {
    const existingUser = await findUserByEmail(email)

    if (existingUser) {
      if (!existingUser.username) {
        const username = await generateUniqueUsername(name)

        user = await prisma.users.update({
          where: {
            id: existingUser.id,
          },
          data: {
            username,
          },
        })
      } else {
        user = existingUser
      }

      await createOAuthAccount(
        user.id,
        provider,
        providerAccountId,
      )
    } else {
      user = await createOAuthUser(
        name,
        email,
        provider,
        providerAccountId,
      )
    }
  }

  const accessToken = generateAccessToken(user.id)

  const refreshToken = await createSession(
    user.id,
    userAgent,
    ipAddress,
  )

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
export {
  getGoogleAuthUrl,
  handleGoogleCallback,
  findOAuthAccount,
  createOAuthAccount,
  createOAuthUser,
  findUserByEmail,
  loginWithOAuth,
}