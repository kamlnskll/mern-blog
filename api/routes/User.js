import express from 'express'
import { getUserData, loginUser, registerUser } from '../controllers/user.js'
import cors from 'cors'

const router = express.Router()

// This will be ending at /api/users
// Registration aka adding user with post request

router.use(cors())

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/userdata', getUserData)

export default router
