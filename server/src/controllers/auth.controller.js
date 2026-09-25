import { registerService } from '../services/auth.service.js'

const registerController = async (req, res) => {
  const { name, email, password } = req.body

  const result = await registerService(
    name, 
    email, 
    password
  )

  res.status(201).json(result)
}

export { registerController }