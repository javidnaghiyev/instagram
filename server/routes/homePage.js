import express from 'express';
import { getHomePage, createPost, updatePost, deletePost, likePost } from '../controllers/homePage.js';

const router = express.Router()

router.get('/', getHomePage)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router