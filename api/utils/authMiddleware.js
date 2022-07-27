import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Users from '../models/Users.js'

// Export this const and use it as an argument for routes. You'll need an auth token to access these routes.
// export const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       // Split turns it into an array and we split at the space where BEARER is the first item and token is the second item
//       // Get the token from the header

//       token = req.headers.authorization.split('')[1]
//       // Verify Token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET)

//       // Get the user from the token by the id, we don't want the pw hash here so we add the .select method
//       req.user = await Users.findbyId(decoded.id).select('-password')

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401)
//       throw new Error('Not authorized!')
//     }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized, please get an authorization token')
//   }
// })

// // We take the authorization in the header and make sure a valid token exists - BEARER then TOKEN

// // Token verification function will go here? Experimental

// // export const jwtVerify = jwt.verify(token, process.env.JWT_SECRET)

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
