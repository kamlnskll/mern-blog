import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Users from '../models/Users'

// Register a new user
// Post to /api/users

export const registerUser = (req, res) => {
  res.json({ message: 'Register User' })
}

// Authenticate user and login
// Post to /api/users/login

export const loginUser = (req, res) => {
  res.json({ message: 'Logged in a user' })
}

// Fetch user data once authenticated
// Post to /api/users

export const getUserData = (req, res) => {
  res.json({ message: 'Individual user data here' })
}
