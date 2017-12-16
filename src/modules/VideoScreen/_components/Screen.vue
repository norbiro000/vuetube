<template>
  <div class="ui embed"
    :data-source="vdo.dataSource"
    :data-id="vdo.dataID"
    ref="player">
  </div>
</template>

<script>
export default {
  props: ['vdo'],
  mounted () {
    this.refreshDOM()
  },
  methods: {
    refreshDOM () {
      if (this.vdo) {
        this.$nextTick(() => {
          window.$(this.$refs.player).embed({
            autoplay: true
          })
        })
      }
    }
  },
  updated () {
    this.refreshDOM()
  },
  watch: {
  }
}
</script>

<style>
</style>
