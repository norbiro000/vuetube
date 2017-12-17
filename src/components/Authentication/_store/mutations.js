export default {
  LOGIN_SUCCESS (state, userInfo) {
    state.user = userInfo
  },
  LOGIN_FIAILURE (state) {
    state.user = null
  },
  LOGOUTE (state) {
    state.user = null
  }
}
