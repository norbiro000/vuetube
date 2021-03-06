import Promise from 'bluebird'
import { CognitoRegister } from '../Cognito'

function _mockLoginLogic (userInfo) {
  return new Promise((resolve, reject) => {
    let loginResponse
    if (userInfo.username !== 'admin') {
      loginResponse = {
        status: false,
        message: 'Wrong username or  password'
      }
    } else {
      loginResponse = {
        status: true,
        message: '',
        userInfo: {
          username: 'admin',
          name: 'Admin VueTube',
          superuser: true
        }
      }
    }
    resolve(loginResponse)
  })
}

export default {
  logout ({state, commit}) {
    commit('LOGOUTE')
  },
  login ({state, commit}, userInfo) {
    _mockLoginLogic(userInfo).then(response => {
      if (response.status) {
        commit('LOGIN_SUCCESS', response.userInfo)
      } else {
        alert(`${response.message}`)
      }
    })
  },
  register ({state, commit}, userInfo) {
    CognitoRegister(userInfo)
    .then(response => {
      alert('Register Success')
    }).catch(e => {
      alert(e)
    })
  }
}
