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

//CreateCartListReducer
export const CreateCartListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartCreat: action.payload,
      }
    case ADD_TO_CART_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// getCartProductReducer
export const getCartProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CART_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        getCartPro: action.payload,
      }
    case GET_CART_PRODUCT_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// decreaseFromCartListReducer
export const decreaseFromCartListReducer = (state = {}, action) => {
  switch (action.type) {
    case DECREASE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DECREASE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        drecreasCartPro: action.payload,
      }
    case DECREASE_FROM_CART_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// removeFromCartReducer
export const removeFromCartReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        removeCartPro: action.payload,
      }
    case REMOVE_FROM_CART_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
