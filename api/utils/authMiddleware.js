import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/Users.js'


// Generate a Json Web Token

export const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  })
}






export function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization']
  console.log(bearerHeader)
  if (typeof bearerHeader != 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    // Store the token in the request object
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403) // Access denied
  }
}
