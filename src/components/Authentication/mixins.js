import { mapState } from 'vuex'
import store from './_store'
export default {
  created () {
    this.$store.registerModule('$_authentication', store)
    this.isLogin('created')
  },
  updated () {
    this.isLogin()
  },
  computed: {
    ...mapState('$_authentication', {
      user: 'user'
    })
  },
  mounted () {
  },
  methods: {
    logout () {
      this.$store.dispatch('$_authentication/logout')
    },
    isLogin (from) {
      if (!this.user) {
        this.$router.push('/login')
      } else {
        this.$router.push('/')
      }
    },
    gotoHomePage () {
      this.$router.push('/')
    }
  },
  watch: {
    user (newUser, oldUser) {
      this.isLogin()
    }
  }
}
