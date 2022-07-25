import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/Post.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/User.js'

// Setup server and dotenv
// Setup express server

const app = express()
dotenv.config()
const port = 8080
app.use(cors())

// Now connect to MONGODB using mongoose as well as a disconnection message.

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log(`Connected to MongoDB!`)
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('Disconnected', () => {
  console.log('Disconnected from MongoDB!')
})

// --------------------------------------------------------
// Note
// We create Models that connect directly to MongoDB cluster. These models are then imported into the controllers and inside the controller file for each respective CRUD feature on the site that needs to store data. (Users, Posts etc)

// After CRUD operations is setup in controller, each one is imported into its respective routes file, and then the routes file is imported into index.js for the middleware routes

// --------------------------------------------------------

// BODYPARSER IS USED TO READ THE POST REQ.BODY - OTHERWISE, RETURNS EMPTY SET OF DATA.
app.use(bodyParser.json())

// This is where the routing middleware goes
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

// app.use('/api/posts', postRoutes)
// app.use('/api/posts', postRoutes)
// app.use('/api/posts', postRoutes)

// Now we connect to the backend using express and app.listen to the 8800 port

app.listen(port, () => {
  dbConnect()
  console.log(`Connected to backend on port ${port}!`)
})
