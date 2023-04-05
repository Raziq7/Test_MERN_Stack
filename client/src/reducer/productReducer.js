import {
  ADD_PRODUCT_ERR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_ERR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../constant/ProductConstant'

//addProductReducer
export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        setPro: action.payload,
      }
    case ADD_PRODUCT_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// getProductReducer
export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        findPro: action.payload,
      }
    case GET_PRODUCT_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
