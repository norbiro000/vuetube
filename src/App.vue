<template>
  <div id="app" class="">
    <TopMenu />
    <router-view class=""/>
  </div>
</template>

<script>
import TopMenu from '@/components/Menu'
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue Tube'
    }
  },
  components: {
    TopMenu
  }
}
</script>

<style>
</style>
