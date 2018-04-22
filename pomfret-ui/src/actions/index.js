import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'
const ROOT_URL = 'https://reqres.in/api'

export function signinUser({ email, password }) {
  return function(dispatch) {
    const request = axios.post(`${ROOT_URL}/login`, { email, password })
    dispatch({ type: USER_LOGGING_IN })
    request
      .then(response => {
        localStorage.setItem('token', response.data.token)
        dispatch({ type: AUTH_USER })
      })
      .catch(() => {
        dispatch(authError('bad login info'))
      })
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
