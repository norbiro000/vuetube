<template>
  <div class="ui secondary pointing menu">
    <a
      class="item"
      v-for="(menu,i) in menus"
      :class="isActive(i)"
      @click="changeRoute(i)"
      :key="menu.title"
      :to="menu.path">{{ menu.title }}</a>
    
    <div class="right menu">
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
            title: 'Home',
            path: '/'
          },
          {
            title: 'Manage',
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
        alert(index)
        this.active = index
      }
    }
  }
</script>
