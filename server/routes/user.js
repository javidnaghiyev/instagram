import express from 'express'
import { signin, signup, getProfile } from '../controllers/user.js'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/:id', getProfile)

export default router