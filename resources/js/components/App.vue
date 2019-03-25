<template>
    <audio-player :sources="['audio/mp3/sample.mp3']"></audio-player>
</template>

<script>
import AudioPlayer from './AudioPlayer'

export default {
  name: "app",
  components: {AudioPlayer}
}
</script>

<style scoped>

</style>
