import express from 'express'
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostByCategory,
} from '../controllers/post.js'

const router = express.Router()

// We don't need to put the /user

router.get('/', getPosts)

router.get('/', getPostByCategory)

router.post('/', createPost)

router.put('/', updatePost)

router.delete('/', deletePost)

export default router
