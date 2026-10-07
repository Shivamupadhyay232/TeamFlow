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

    return res.status(200).json({
      message: 'Google login successful',
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
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

    const result = await loginService(identifier,password,userAgent,ipAddress)

    res.status(200).json({
    message: 'Login successful',
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    user: result.user,
    })
  } catch (error) {
    next(error)
  }
}

const refreshController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({
        message: 'Refresh token is required',
      })
    }

    const result = await refreshAccessToken(refreshToken)

    res.status(200).json({
      accessToken:result.accessToken,
      refreshToken: result.refreshToken,
    })
  } catch (error) {
    next(error)
  }
}

const logoutController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({
        message: 'Refresh token is required',
      })
    }

    await logoutService(refreshToken)

    res.status(200).json({
      message: 'Logout successful',
    })
  } catch (error) {
    next(error)
  }
}

export { registerController, loginController,refreshController,logoutController,googleAuthController,googleCallbackController }