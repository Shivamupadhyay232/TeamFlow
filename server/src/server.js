import 'dotenv/config'
import app from './app.js'
import prisma from './db/prisma.js'

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await prisma.$connect()

    console.log('Prisma connected to PostgreSQL successfully!')

    app.listen(PORT, () => {
      console.log(`TeamFlow server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start TeamFlow server:', error)
    process.exit(1)
  }
}

startServer()