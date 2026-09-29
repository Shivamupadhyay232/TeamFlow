const errorMiddleware = (error, req, res, next) => {
  console.error(error)

  if (error.code === 'P2002') {
    return res.status(409).json({
      message: 'Email is already registered',
    })
  }

  if (error.name === 'ZodError') {
    return res.status(400).json({
      message: 'Validation failed',
      errors: error.issues.map((issue) => issue.message),
    })
  }

  res.status(500).json({
    message: 'Internal server error',
  })
}

export default errorMiddleware