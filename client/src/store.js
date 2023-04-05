import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userLoginReducer, userRegisterReducer } from './reducer/userReducer'
import { addProductReducer, getProductReducer } from './reducer/productReducer'
import {
  CreateCartListReducer,
  getCartProductReducer,
  decreaseFromCartListReducer,
  removeFromCartReducer,
} from './reducer/cartReducer'

const appReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  addProduct: addProductReducer,
  getProduct: getProductReducer,
  CreateCartList: CreateCartListReducer,
  getCartProduct: getCartProductReducer,
  decreaseFromCartList: decreaseFromCartListReducer,
  removeFromCart: removeFromCartReducer,
})

let Middleware = [thunk]

export const store = createStore(appReducer, applyMiddleware(...Middleware))
