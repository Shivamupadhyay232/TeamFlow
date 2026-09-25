const registerService = async (name, email, password) => {
  return {
    name,
    email,
    message: 'Registration service called successfully',
  }
}

export { registerService }