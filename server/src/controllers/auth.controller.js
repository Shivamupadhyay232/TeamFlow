import { registerSchema,loginSchema } from '../validators/auth.validator.js'
import { registerService,loginService } from '../services/auth.service.js'
import {refreshAccessToken} from '../services/session.service.js'

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

    const accessToken = await refreshAccessToken(refreshToken)

    res.status(200).json({
      accessToken,
    })
  } catch (error) {
    next(error)
  }
}
export { registerController, loginController,refreshController }