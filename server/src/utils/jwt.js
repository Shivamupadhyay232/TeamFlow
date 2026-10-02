import jwt from 'jsonwebtoken'

const generateAccessToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '15m',
    },
  )
}
const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

export { generateAccessToken,verifyAccessToken }