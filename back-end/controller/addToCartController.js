import asyncHandler from 'express-async-handler'
import AddToCart from '../models/AddToCartModel.js'
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

// @desc    create carts
// @route   post /api/addToCart
// @access  Admin/User

export const createCart = asyncHandler(async (req, res) => {
  const { id, userId } = req.body

  let productObj = {
    items: id,
    qty: 1,
  }

  const isCartExist = await AddToCart.findOne({
    user: new mongoose.Types.ObjectId(userId),
  })
  if (isCartExist) {
    let productExist = isCartExist.products.findIndex(
      (product) => product.items == id,
    )
    if (productExist != -1) {
      let updateQty = await AddToCart.updateOne(
        { user: userId, 'products.items': id },
        {
          $inc: { 'products.$.qty': 1 },
        },
      )
      res.status(200).json()
    } else {
      // const carts = await AddToCart.create({
      //   user: userId,
      //   products: [{ items: productId, qty: 1 }],
      // })

      const updateProCarts = await AddToCart.updateOne(
        { user: userId },
        {
          $push: {
            products: productObj,
          },
        },
      )
      res.status(200).json(updateProCarts)
    }
  } else {
    let cartCollections = {
      user: userId,
      products: [productObj],
    }

    const carts = await AddToCart.create(cartCollections)
    res.status(200).json(carts)
  }
})

// @desc    get all carts
// @route   Get /api/addToCart
// @access  Admin/User

export const getCartProduct = asyncHandler(async (req, res) => {
  let userId = req.params.id

  let cartCollection = await AddToCart.find({
    user: new mongoose.Types.ObjectId(userId),
  })
    .populate({
      path: 'products.items',
      model: 'Product',
      select: '_id title image price rate',
    })
    .select('products.items products.qty')
    .lean()

    console.log(cartCollection[0].products,"cartCollectioncartCollectioncartCollection");
  cartCollection = cartCollection.map((cart) => ({
    items: cart.products.map((product) => ({
      
      _id: product?.items?._id,
      image: product?.items?.image,
      title: product?.items?.title,
      price: product?.items?.price,
      qty: product?.qty,
    })),
  }))

  if (cartCollection && cartCollection.length !== 0) {
    let cartItems = cartCollection[0].items

    res.status(200).json(cartItems)
  } else {
    res.status(404).json('Your cart is empty')
  }
})

// removeFromCart
export const decreaseFromCart = asyncHandler(async (req, res) => {
  const { id, userId } = req.body
  console.log(id, userId, 'id,userId ')
  const cart = await AddToCart.findOne({ user: userId })

  if (cart) {
    const index = cart.products.findIndex(
      (product) => product.items.toString() === id,
    )

    if (index !== -1) {
      cart.products[index].qty -= 1
      if (cart.products[index].qty <= 0) {
        cart.products.splice(index, 1)
      }

      await cart.save()
      res.status(200).json(cart)
    } else {
      res.status(200).json('Product remove from cart')
    }
  } else {
    res.status(404).json('cart is empty')
    // throw new Error('cart is empty')
  }
})

// removeFromCart
export const removeFromCart = asyncHandler(async (req, res) => {
  const { id, userId } = req.body
  const cart = await AddToCart.findOne({ user: userId })

  if (cart) {
    const index = cart.products.findIndex(
      (product) => product.items.toString() === id,
    )

    if (index !== -1) {
      cart.products.splice(index, 1)

      await cart.save()
      res.status(200).json(cart)
    } else {
      res.status(200).json('Product remove from cart')
    }
  } else {
    res.status(404).json('cart is empty')
    // throw new Error('cart is empty')
  }
})
