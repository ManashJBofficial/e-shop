import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview
} from '../controllers/productController.js'
import { protect, checkAdmin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, checkAdmin, deleteProduct)
router.route('/').get(getProducts).post(protect, checkAdmin, createProduct)
router.route('/:id').get(getProductById).delete(protect, checkAdmin, deleteProduct).put(protect, checkAdmin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router