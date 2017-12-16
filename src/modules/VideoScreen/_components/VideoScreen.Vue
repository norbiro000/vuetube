<template>
    <div class="ui stackable doubling two column grid">
      <screen
        v-if="playingVideo"
        :vdo="playingVideo"
        class="ui ten wide column videos">
      </screen>
      <ScreenIsLoading v-else
      class="ui ten wide column videos"/>

      <playList
        id="playlist"
        :videos="videos"
        @videoDidChange="videoDidChange"
        class="ui six wide column">
      </playList>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '../_store'
import Screen from './Screen'
import ScreenIsLoading from './ScreenIsLoading'
import PlayList from './VideoPlayList'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('$_video', {
      videos: 'videos',
      playingVideo: 'playingVideo'
    })
  },
  created () {
    this.$store.registerModule('$_video', store)
  },
  methods: {
    ...mapActions('$_video', {
      videoDidChange: 'changeVideo'
    })
  },
  components: {
    Screen,
    PlayList,
    ScreenIsLoading
  }
}
</script>

<style scoped>
.videos {
  height: 400px;
}
</style>
