import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../controllers/userController.js'
import { protect,checkAdmin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, checkAdmin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, checkAdmin, deleteUser)

export default router
