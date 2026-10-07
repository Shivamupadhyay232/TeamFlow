import prisma from '../db/prisma.js'

const generateUniqueUsername = async (baseValue) => {
  const baseUsername =
    baseValue
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 25) || 'user'

  let username = baseUsername
  let counter = 1

  while (
    await prisma.users.findUnique({
      where: { username },
    })
  ) {
    const suffix = `_${counter}`

    username =
      baseUsername.slice(0, 30 - suffix.length) + suffix

    counter++
  }

  return username
}

export default generateUniqueUsername