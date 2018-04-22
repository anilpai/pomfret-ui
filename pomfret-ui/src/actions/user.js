import { BASE_API_URL} from '../api/config'
import axios from 'axios'

export const LOGIN_SUCCESSFULLY = 'login_successfully'
export const LOGIN_FAILURE = 'login_failure'
export const LOGIN_INIT = 'login_init'

export function Initlogin() {
  return {
    type: LOGIN_INIT
  }
}

export function loginsuccessfully(token) {
  return {
    type: LOGIN_SUCCESSFULLY,
    token
  }
}

export function loginfailure(err) {
  return {
    type: LOGIN_FAILURE,
    err
  }
}

export function reqlogin(user, passwd) {
  return dispatch => {
    dispatch(Initlogin())

    return axios
      .post(BASE_API_URL + '/login', {
        username: user,
        password: passwd
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(loginsuccessfully(response.data.token))
          localStorage.setItem('token', response.data.token)
        } else {
          dispatch(loginfailure('Invalid Credentials'))
        }
      })
      .catch(error => {
        dispatch(loginfailure(error))
      })
  }
}

export const LOG_OUT = 'logout'

export function logout() {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({
      type: LOG_OUT
    })
  }
}
