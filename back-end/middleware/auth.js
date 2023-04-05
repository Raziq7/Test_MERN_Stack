import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import {User} from '../models/userModel.js';
import sanitizedConfig from '../config.js';

export const auth = asyncHandler(
  async (req, res, next) => {
    const { authorization } = req.headers;


    let token;

    if (authorization && authorization.startsWith('Bearer')) {
      try {
        token = authorization.split(' ')[1];

        const decoded = jwt.verify(
          token,
          sanitizedConfig.JWT_SECRET
        );
        req.user = await User.findById(decoded.id).select('-password');

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    }
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);

export const admin = asyncHandler(
  async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error('Not authorized, no admin');
    }
  }
);
