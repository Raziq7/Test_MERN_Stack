import axios from 'axios'
import {
  ADD_TO_CART_ERR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_PRODUCT_ERR,
  GET_CART_PRODUCT_REQUEST,
  GET_CART_PRODUCT_SUCCESS,
  DECREASE_FROM_CART_ERR,
  DECREASE_FROM_CART_REQUEST,
  DECREASE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_ERR,
} from '../constant/addToCartConstant'

// CreateCartListAction
export const CreateCartListAction = (id) => async (dispatch, getState) => {
  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null
  try {
    dispatch({ type: ADD_TO_CART_REQUEST })

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
      },
    }

    let { data } = await axios.post(
      '/api/addToCart',
      {
        id,
        userId: isUserExist._id,
      },
      config,
    )

    dispatch({ type: ADD_TO_CART_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: ADD_TO_CART_ERR, payload: error.response.data })
  }
}

// getCartProductAction
export const getCartProductAction = () => async (dispatch, getState) => {
  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null
  try {
    dispatch({ type: GET_CART_PRODUCT_REQUEST })

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
      },
    }

    let { data } = await axios.get(`/api/addToCart/${isUserExist._id}`, config)

    dispatch({ type: GET_CART_PRODUCT_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: GET_CART_PRODUCT_ERR, payload: error.response.data })
  }
}

// decreasCartQtyAction
export const decreasCartQtyAction = (id) => async (dispatch, getState) => {
  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null
  try {
    dispatch({ type: DECREASE_FROM_CART_REQUEST })

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
      },
    }

    let { data } = await axios.post(
      '/api/addToCart/decreaseFromCart',
      {
        id,
        userId: isUserExist._id,
      },
      config,
    )

    dispatch({ type: DECREASE_FROM_CART_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: DECREASE_FROM_CART_ERR, payload: error.response.data })
  }
}

// removeFromCartAction
export const removeFromCartAction = (id) => async (dispatch, getState) => {
  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null
  try {
    dispatch({ type: REMOVE_FROM_CART_REQUEST })

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
      },
    }

    let { data } = await axios.post(
      '/api/addToCart/removeFromCart',
      {
        id,
        userId: isUserExist._id,
      },
      config,
    )

    dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: REMOVE_FROM_CART_ERR, payload: error.response.data })
  }
}
