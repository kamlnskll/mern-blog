import express from 'express'
import { ensureToken } from '../utils/authMiddleware.js'
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
} from '../controllers/post.js'

const router = express.Router()

// We don't need to put the /user

router.get('/', getPosts)

router.get('/:id', getPostById)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

export default router
