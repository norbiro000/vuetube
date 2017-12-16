<template>
    <div class="ui ">
      <screen
        v-if="playingVideo"
        :vdo="playingVideo"
        class="ui eight wide column videos segment">
      </screen>
      <ScreenIsLoading v-else
      class="ui eight wide column videos"/>
      <playList
        id="playlist"
        :videos="videos"
        @videoDidChange="videoDidChange"
        class="ui two wide column">
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

<style>
#playlist {
  position: relative;
  top: 50px;
}

.videos {
  min-height: 350px;
}
</style>
