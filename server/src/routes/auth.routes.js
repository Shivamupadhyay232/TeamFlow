import express from 'express'
import { registerController,loginController,refreshController,logoutController,googleAuthController,googleCallbackController } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.post('/refresh', refreshController)
router.post('/logout', logoutController)
router.get('/google', googleAuthController)
router.get('/google/callback', googleCallbackController)
export default router