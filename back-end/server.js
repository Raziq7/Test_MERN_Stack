import express from 'express'
import { Server } from 'http'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import addToCartRoutes from './routes/addToCartRoutes.js'

import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cors from 'cors'
import path from 'path'
import sanitizedConfig from './config.js'

// dotenv.config({
//   path: path.resolve(__dirname, '/.env'),
// })
dotenv.config()

connectDb()

const app = express()

if (sanitizedConfig.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/addToCart', addToCartRoutes)

app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = sanitizedConfig.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(
    `🟢 Server running in ${sanitizedConfig.NODE_ENV} mode on port ${PORT}`,
  ),
)
