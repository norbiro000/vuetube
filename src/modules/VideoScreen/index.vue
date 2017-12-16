<template>
  <VideoScreen class="ui container videoscreen"></VideoScreen>
</template>

<script>
import VideoScreen from './_components/VideoScreen'
export default {
  created () {
    document.title = 'VueTube'
  },
  components: {
    VideoScreen
  }
}
</script>

<style>
.videoscreen {
  position: relative;
  top: 32px;
}
</style>
