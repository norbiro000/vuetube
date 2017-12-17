import Vue from 'vue'
import Router from 'vue-router'
import VideoScreen from '@/modules/VideoScreen'
import Authentication from '@/components/Authentication'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'VideoScreen',
      component: VideoScreen
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
