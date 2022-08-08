import express from 'express'
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
} from '../controllers/post.js'

import { requireAuth } from '../utils/authMiddleware.js'

const router = express.Router()

// Initialize the auth check function middleware
router.use(requireAuth)

// We don't need to put the /user

router.get('/', getPosts)

router.get('/:id', getPostById)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

export default router
