import express from 'express'
const router = express.Router()
import {addOrderItems,getMyOrders,getOrderById, updateOrderToPaid,getOrders, } from '../controllers/orderController.js'
import { protect,checkAdmin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, checkAdmin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)


export default router