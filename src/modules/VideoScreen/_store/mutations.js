import { setTimeout } from 'timers'

export default {
  updatedVideo (state, videoIndex) {
    state.playingVideo = null
    setTimeout(function () {
      state.playingVideo = state.videos[videoIndex]
    }, 300)
  }
}
