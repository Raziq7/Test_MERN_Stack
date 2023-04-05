import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  let { title, price, rating, image } = req.body.value

  price = parseInt(price)


  const product = new Product({
    title: title,
    price: parseInt(price),
    rate: parseFloat(rating),
    image: image,
  })

  if (product) {
    const newProduct = await product.save()
    res.status(201).json(newProduct)
  } else {
    res.status(400)
    throw new Error('products not found!')
  }
})

// @desc    Fetch products
// @route   GET /api/products
// @access  Public
export const getProductList = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  if (products) {
    res.status(200).json(products)
  } else {
    res.status(500)
    throw new Error('products not found!')
  }
})
