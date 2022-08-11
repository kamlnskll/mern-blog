import express from 'express'
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
} from '../controllers/post.js'

import { requireAdmin, requireAuth } from '../utils/authMiddleware.js'

const router = express.Router()

// Initialize the auth check function middleware
router.use(requireAuth)

// We don't need to put the /user

router.get('/', getPosts)

router.get('/:id', getPostById)

router.post('/', requireAdmin, createPost)

router.put('/edit/:id', requireAdmin, updatePost)

router.delete('/:id', requireAdmin, deletePost)

export default router
