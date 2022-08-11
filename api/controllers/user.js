import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
import asyncHandler from 'express-async-handler'
import { generateAccessToken } from '../utils/authMiddleware.js'

// Register a new user
// Post to /api/users

export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body
  if (!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error('Please fill out all fields')
  }

  // First we check if the user already exists in the Database
  const userExists = await Users.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Now we hash password using BCrypt by creating a salt and then hashing with that

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Then we create user with the Mongoose Model
  const user = await Users.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isAdmin,
  })

  if (user) {
   const token = generateAccessToken(user._id, user.isAdmin)

    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token
      
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

  res.json({ message: 'Register User' })
})

// Authenticate user and login
// Post to /api/users/login

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check if user exists in database
  const user = await Users.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
   const token = generateAccessToken(user._id, user.isAdmin)

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      token
    })
  } else {
    res.status(400)
    throw new Error('No user found with those credentials')
  }
  // res.json({ message: 'Logged in a user' })
})

// Fetch user data once authenticated
// Post to /api/users

export const getUserData = asyncHandler(async (req, res) => {
  res.json({ message: 'Individual user data here' })
})
