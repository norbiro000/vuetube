import store from './_store'
import { mapState } from 'vuex'
export default {
  created () {
    let getUrl = window.location
    let siteName = getUrl.host
    this.$store.registerModule('$_site', store)
    this.$store.dispatch('$_site/registerSiteName', siteName)
  },
  computed: {
    ...mapState('$_site', {
      siteName: 'siteName'
    })
  }
}
