import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'

import { User } from '../models/userModel.js'
import generatorToken from '../utils/generateToken.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Admin || user

export const userLoginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !email.includes('@') || !password || password.trim() === '') {
    res.status(422).json('Invalid input.')
  }

  const user = await User.findOne({ email })

  if (user) {
    const match = await bcrypt.compare(password, user.password)

    if (match) {
      res.status(200).json({
        _id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user?._id),
      })
    } else {
      res.status(400).json('Invalid Password or Email')
    }
  } else {
    res.status(400).json('email not exist')
  }
})

// @desc    Get all users
// @route   Get /api/users
// @access  public

export const userRegisterController = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword, admin } = req.body
  
  if(password === confirmPassword){
  let findAdmin = await User.findOne({ email })

  if (!findAdmin) {
    const user = new User({ email, password, isAdmin: admin })

    const newUser = await user.save()
    

    res.status(200).json({
      _id: newUser._id,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser?._id),
    })
  } else {
    res.status(401)

    throw new Error('Already exist')
  }}else{
    res.status(400).json('Password does not match')
  }
})
