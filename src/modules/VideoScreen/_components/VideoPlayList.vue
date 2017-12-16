
<template>
<div>
  <h5>รายการแนะนำ</h5>
  <div class="ui unstackable items">
    <div class="item" v-for="(vdo, index) in videos">
      <div class="image">
        <img :src="vdo.thumbnail" @click="changeVideo(index)">
      </div>
      <div class="content">
        <a class="header" @click="changeVideo(index)">{{ vdo.title }}</a>
        <div class="meta">
          <span>{{ vdo.meta }}</span>
        </div>
        <div class="description">
          <span>{{ vdo.description }}</span>
        </div>
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
img:hover {
  cursor: pointer;
}
</style>
