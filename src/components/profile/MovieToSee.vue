<template>
  <div class="container mt-3">
    <p>Movies To See</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item list-group-item-action" v-for="(movie, index) in MovieToSee" :key="index">
        {{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'MovieToSee',
  computed: {
    ...mapGetters(['MovieToSee'])
  }
}
</script>

<style>

</style>