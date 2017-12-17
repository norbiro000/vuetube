export default {
  registerSiteName ({state, commit}, siteName) {
    if (siteName) {
      commit('REGISTER_SITE_NAME_SUCCESS', siteName)
    }
  }
}
