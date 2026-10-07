import prisma from '../db/prisma.js'

const getCurrentUserController = async (req, res, next) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    })

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    res.status(200).json({
      user,
    })
  } catch (error) {
    next(error)
  }
}

export default getCurrentUserController