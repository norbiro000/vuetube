<template>
  <div id="app" class="ui container">
    <div class="ui secondary pointing menu">
    <a class="item">
      Home
    </a>
    <a class="item active">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
    <div class="right menu">
      <a class="ui item active">
        Logout
      </a>
    </div>
  </div>
  <router-view class=""/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue Tube'
    }
  }
}
</script>

<style>
</style>
