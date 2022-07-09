import express from 'express';
import { getHomePage, createPost, updatePost, deletePost, likePost, comment, deleteComment } from '../controllers/homePage.js';
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getHomePage)
router.post('/', createPost)
router.patch('/:id/comment', comment)
router.patch('/:id/:comment/deleteComment', deleteComment)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router