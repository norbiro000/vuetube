import Vue from 'vue'
import Router from 'vue-router'
import VideoScreen from '@/modules/VideoScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoScreen',
      component: VideoScreen
    }
  ]
})
