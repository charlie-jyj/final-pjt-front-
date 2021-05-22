<template>
  <div>
     영화 보여줄겡
     {{MovieSeries}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'MovieSlider',
  computed: {
    ...mapGetters(['MovieSeries'])
  }
}
</script>

<style>

</style>