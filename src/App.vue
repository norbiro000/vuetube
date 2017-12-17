<template>
  <div id="app" class="">
    <TopMenu />
    <router-view class=""/>
  </div>
</template>

<script>
import TopMenu from '@/components/Menu'
import AuthMixinx from '@/components/Authentication/mixins'
import SiteMixins from '@/components/Site/mixins'
export default {
  name: 'app',
  mixins: [SiteMixins, AuthMixinx],
  data () {
    return {
      title: 'Vue Tube'
    }
  },
  created () {
    // let getUrl = window.location
    // let baseUrl = getUrl .protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1]
    // alert(getUrl.host)
  },
  components: {
    TopMenu
  }
}
</script>

<style>
</style>
