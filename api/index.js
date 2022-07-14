import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/Post.js'

// Setup server and dotenv
// Setup express server

const app = express()
dotenv.config()
const port = 8080

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

// This is where the routing middleware goes
app.use('/api/posts', postRoutes)

// app.use('/api/posts', postRoutes)
// app.use('/api/posts', postRoutes)
// app.use('/api/posts', postRoutes)

// Now we connect to the backend using express and app.listen to the 8800 port

app.listen(port, () => {
  dbConnect()
  console.log(`Connected to backend on port ${port}!`)
})
