import express from 'express'
import cookieParser from 'cookie-parser'
import healthRouter from './routes/health.routes.js'
import authRouter from './routes/auth.routes.js'
import errorMiddleware from './middleware/error.middleware.js'
import userRouter from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api', healthRouter)
app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use(errorMiddleware)

export default app