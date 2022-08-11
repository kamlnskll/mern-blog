import jwt from 'jsonwebtoken'
import Users from '../models/Users.js'


// Generate a Json Web Token


export const generateAccessToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  })
}

export const requireAuth = async (req, res, next) => {

  // First, verify auth by using the Auth Headers property that will be implemented on the front-end
  // Grab authorization property from headers

  const { authorization } = req.headers

  // Make sure authorization has a value

  if(!authorization){
    return res.status(401).json({error: 'Auth token required!'})
  }

  // We are splitting the Bearer token that we receive from the front-end
  // We use split method and grab second item from the array aka the token

  const token = authorization.split(' ')[1]

  try{

const {_id } = jwt.verify(token, process.env.JWT_SECRET)

// We are attaching the user property to the request so that we can pass it alongside the middleware

// Using the select method returns JUST the user ID from mongo, not the whole doc


req.user = await Users.findOne({_id}).select('_id')



next()

  } catch(error){
    console.log(error)
    res.status(401).json({error: 'Request not authorized'})
  }
  
}

export const requireAdmin = async (req, res, next) => {

  const { authorization } = req.headers

  // Make sure authorization has a value

  if(!authorization){
    return res.status(401).json({error: 'Auth token required!'})
  }

  // We are splitting the Bearer token that we receive from the front-end
  // We use split method and grab second item from the array aka the token

  const token = authorization.split(' ')[1]

  // Take is AdminValue from this
  try{
    const {_id, isAdmin } = jwt.verify(token, process.env.JWT_SECRET)
    console.log(_id, isAdmin)
    if(isAdmin === true){
    next()
  } else {
console.log('You are not admin')
  }} catch (err){
  throw err
}}
