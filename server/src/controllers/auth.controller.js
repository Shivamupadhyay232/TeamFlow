import { registerSchema } from '../validators/auth.validator.js'
import { registerService } from '../services/auth.service.js'

const registerController = async (req, res, next) => {
  try {
    const validatedData = registerSchema.parse(req.body)

    const { name, email, password } = validatedData

    const result = await registerService(name, email, password)

    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

export { registerController }