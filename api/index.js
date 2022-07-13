import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

// Setup server and dotenv
// Setup express server

const app = express()
dotenv.config()

// Now connect to MONGODB using mongoose as well as a disconnection message.

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB!')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('Disconnected', () => {
  console.log('Disconnected from MongoDB!')
})

// Now we connect to the backend using express and app.listen to the 8800 port

app.listen(8080, () => {
  dbConnect()
  console.log('Connected to backend!')
})

// API ENDPOINTS
app.use('/api/posts')
app.use('/api/users')
app.use('/api/authors')
