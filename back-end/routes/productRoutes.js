import express from 'express'

import { auth } from '../middleware/auth.js'
import {
  createProduct,
  getProductList,
} from '../controller/productController.js'

const router = express.Router()

router.route('/').post(auth, createProduct).get(getProductList)

export default router
