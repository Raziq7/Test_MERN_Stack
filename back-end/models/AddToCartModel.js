import { Schema, model, Types } from 'mongoose'

const AddToCartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
      {
        items: { type: String, required: true },
        qty: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  },
)

const AddToCart = model('AddToCart', AddToCartSchema)

export default AddToCart
