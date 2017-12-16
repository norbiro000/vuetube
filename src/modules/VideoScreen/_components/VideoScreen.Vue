<template>
  <div class="ui embed"
    data-source="vimeo"
    data-id="125292332"
    data-placeholder="https://www.1112.com/images/products/pizza/website/Pan_Ham&Crab-Sticks.png"
    ref="player">
  </div>
</template>

<script>
export default {
  mounted () {
    window.$(this.$refs.player).embed()
  }
}
</script>

<style>
#screen {
  background: black;
}
</style>
