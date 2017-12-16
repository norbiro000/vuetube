<template>
  <div id="topmenu" class="ui secondary  menu ">
    <a
      class="item"
      v-for="(menu,i) in menus"
      :class="isActive(i)"
      @click="changeRoute(i)"
      :key="menu.title"
      :to="menu.path">{{ menu.title }}</a>

    <div class="right menu">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>

      <a class="ui item active">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0,
        menus: [
          {
            title: 'Vue Tube',
            path: '/'
          }
        ]
      }
    },
    methods: {
      isActive (index) {
        return index === this.active ? 'active' : ''
      },
      changeRoute (index) {
        this.active = index
      }
    }
  }
</script>
<style scoped>
#topmenu {
  padding: 10px;
  box-shadow: 5px 0px 5px rgba(1, 1, 1, 0.1)
}
</style>
