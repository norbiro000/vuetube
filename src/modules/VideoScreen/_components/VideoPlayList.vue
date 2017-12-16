
<template>
  <div class="ui items">
  <div class="item" v-for="(vdo, index) in videos" @click="changeVideo(index)">
    <div class="image">
      <img :src="vdo.thumbnail">
    </div>
    <div class="content">
      <a class="header">{{ vdo.title }}</a>
      <div class="meta">
        <span>{{ vdo.meta }}</span>
      </div>
      <div class="description">
        <span>{{ vdo.description }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['videos'],
  methods: {
    changeVideo (index) {
      this.$emit('videoDidChange', index)
    }
  }
}
</script>

<style>

</style>
