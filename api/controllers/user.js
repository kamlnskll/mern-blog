import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
import asyncHandler from 'express-async-handler'

// Register a new user
// Post to /api/users

export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body
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
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateJWT(user._id),
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
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      token: generateJWT(user._id),
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

// Generate a Json Web Token

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2m',
  })
}

// export function authenticateJWTToken(req, res, next) {
//   // Grab the authorization section of the header request

//   const authHeader = req.headers['authorization']

//   // BEARER token - we split at the space and turn the function into an array which grabs the '[1]' place item aka the bearer token
//   // If we have Authheader, bring back the token or undefined
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }
