import axios from 'axios'
import {
  LOGIN_USER_ERR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCESS,
  REGISTER_USER_ERR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCESS,
} from '../constant/userConstant'

//login
export const LoginAction = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST })

    let value = { email, password }
    let { data } = await axios.post('/api/users/login', value)

    dispatch({ type: LOGIN_USER_SUCESS, payload: data })

    // console.log(data,"datadatadatadata");
    localStorage.setItem('loginInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERR, payload: error.response.data })
  }
}
// userRegisterAction
export const userRegisterAction = (
  email,
  password,
  confirmPassword,
  admin,
) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST })

    let value = { email, password, confirmPassword, admin }
    console.log(value)
    let { data } = await axios.post('/api/users/register', value)

    dispatch({ type: REGISTER_USER_SUCESS, payload: data })

    // console.log(data,"datadatadatadata");
    localStorage.setItem('loginInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: REGISTER_USER_ERR, payload: error.response.data })
  }
}
