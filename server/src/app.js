import express from 'express'
import healthRouter from './routes/health.routes.js'
import authRouter from './routes/auth.routes.js'
const app = express()

app.use(express.json())

app.use('/api', healthRouter)
app.use('/api/auth',authRouter)

export default app