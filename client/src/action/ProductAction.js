import axios from 'axios'
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERR,
} from '../constant/ProductConstant'

// addProductAction
export const addProductAction = (title, price, rating, image) => async (
  dispatch,
  getState,
) => {
  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null
  let value = { title, price, rating, image }

  try {
    dispatch({ type: ADD_PRODUCT_REQUEST })
    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
      },
    }
    let { data } = await axios.post('/api/products', { value }, config)

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_ERR, payload: error.response.data })
  }
}

// getProductAction
export const getProductAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST })

    let { data } = await axios.get('/api/products')

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })

    // console.log(data,"datadatadatadata");
  } catch (error) {
    dispatch({ type: GET_PRODUCT_ERR, payload: error.response.data })
  }
}
