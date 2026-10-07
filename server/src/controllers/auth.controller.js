import { registerSchema,loginSchema } from '../validators/auth.validator.js'
import { registerService,loginService } from '../services/auth.service.js'
import {refreshAccessToken,logoutService} from '../services/session.service.js'
import { getGoogleAuthUrl,handleGoogleCallback } from '../services/oauth.service.js'

const googleAuthController = (req, res, next) => {
  try {
    const authUrl = getGoogleAuthUrl()

    res.redirect(authUrl)
  } catch (error) {
    next(error)
  }
}

const googleCallbackController = async (req, res, next) => {
  try {
    const { code, error: googleError } = req.query

    if (googleError) {
      return res.status(400).json({
        message: `Google authentication failed: ${googleError}`,
      })
    }

    if (!code) {
      return res.status(400).json({
        message: 'Google authorization code is missing',
      })
    }

    const userAgent = req.get('user-agent')
    const ipAddress = req.ip

    const result = await handleGoogleCallback(
      code,
      userAgent,
      ipAddress,
    )

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      message: 'Google login successful',
      accessToken: result.accessToken,
      user: result.user,
    })
  } catch (error) {
    next(error)
  }
}

const registerController = async (req, res, next) => {
  try {
    const validatedData = registerSchema.parse(req.body)

    const { name, username, email, password } = validatedData

    const result = await registerService(name, username, email, password)

    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

const loginController = async (req, res, next) => {
  try {
    const validatedData = loginSchema.parse(req.body)

    const { identifier, password } = validatedData

    const userAgent = req.get('user-agent')
    const ipAddress = req.ip

    const result = await loginService(
      identifier,
      password,
      userAgent,
      ipAddress,
    )

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
      message: 'Login successful',
      accessToken: result.accessToken,
      user: result.user,
    })
  } catch (error) {
    next(error)
  }
}

const refreshController = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
      return res.status(401).json({
        message: 'Refresh token is required',
      })
    }

    const result = await refreshAccessToken(refreshToken)

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
      accessToken: result.accessToken,
    })
  } catch (error) {
    next(error)
  }
}

const logoutController = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
      return res.status(401).json({
        message: 'Refresh token is required',
      })
    }

    await logoutService(refreshToken)

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })

    res.status(200).json({
      message: 'Logout successful',
    })
  } catch (error) {
    next(error)
  }
}

export { registerController, loginController,refreshController,logoutController,googleAuthController,googleCallbackController }