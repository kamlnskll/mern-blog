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

router.get('/:postCategory', getPostByCategory)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

export default router
