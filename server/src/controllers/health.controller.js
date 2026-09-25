const healthController = (req, res) => {
  res.json({
    status: 'ok',
    message: 'TeamFlow API is running successfully!',
  })
}

export default healthController