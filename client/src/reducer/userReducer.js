import {
  LOGIN_USER_ERR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCESS,
  REGISTER_USER_ERR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCESS,
} from '../constant/userConstant'

//Login
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_USER_SUCESS:
      return {
        ...state,
        loading: false,
        login: action.payload,
      }
    case LOGIN_USER_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// userRegisterReducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_USER_SUCESS:
      return {
        ...state,
        loading: false,
        register: action.payload,
      }
    case REGISTER_USER_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
