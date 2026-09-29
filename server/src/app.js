import express from 'express'
import healthRouter from './routes/health.routes.js'
import authRouter from './routes/auth.routes.js'
import errorMiddleware from './middleware/error.middleware.js'
const app = express()

app.use(express.json())

app.use('/api', healthRouter)
app.use('/api/auth',authRouter)

app.use(errorMiddleware)

export default app