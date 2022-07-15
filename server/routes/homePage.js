import express from 'express';
import { getHomePage, createPost, updatePost, deletePost, likePost, comment, deleteComment } from '../controllers/homePage.js';
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getHomePage)
router.post('/', auth, createPost)
router.patch('/:id/comment', auth,  comment)
router.patch('/:postId/:commentId/deleteComment', auth,  deleteComment)
router.patch('/:id', auth,  updatePost)
router.delete('/:id', auth,  deletePost)
router.patch('/:id/likePost', auth,  likePost)

export default router