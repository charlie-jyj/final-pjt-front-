<template>
  <div>
    <MovieSchedulerResult v-if="MovieSchedule.length>0" :events="MovieSchedule"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MovieSchedulerResult from '@/components/profile/MovieSchedulerResult.vue'

export default {
  name: 'MovieScheduler',
  components: {
    MovieSchedulerResult
  },
  computed: {
    ...mapGetters(['MovieSchedule'])
  }
}
</script>

<style>

</style>