import express from 'express'

import { auth } from '../middleware/auth.js'
import {
  createCart,
  decreaseFromCart,
  getCartProduct,
  removeFromCart,
} from '../controller/addToCartController.js'

const router = express.Router()

router.route('/').post(auth, createCart)

router.route('/:id').get(auth, getCartProduct)

router.route('/decreaseFromCart').post(auth, decreaseFromCart)

router.route('/removeFromCart').post(auth, removeFromCart)

export default router
