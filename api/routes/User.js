import express from 'express'

const router = express.Router()

// This will be ending at /api/users
// Registration aka adding user with post request

router.post('/', registerUser)

export default router
