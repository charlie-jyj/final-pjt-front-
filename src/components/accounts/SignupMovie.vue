<template>
     <div class="card d-flex flex-row row" style="height: 10rem;">
      <div class="card-header img-wrap col-3">
      <img class="card-img-top ms-1" :src="movie.fields.poster_path" alt="Card image cap" style='height: 100%; width: 100%; object-fit: contain'>
      </div>
      <div class="card-body col-9">
        <div class="ms-2">
          <h5 class="card-title mt-2 fw-bold">{{movie.fields.title}}</h5>
          <star-rating @rating-selected="rateMovie" v-model="rating" :increment="0.5" :show-rating="false"></star-rating>
        </div>
      </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'SignupMovie',
  props: {
    movie: Object,
  },
  data(){
    return {
      rating: 0,
    }
  },
  components: {
    StarRating,
  },
  methods: {
    rateMovie(){
      const data = {
        movie_id: this.movie.pk,
        rate: this.rating
      }
      
      this.$store.dispatch('rateWatchedMovie', data)
    
    }
  }
}
</script>

<style scoped>
  .card-title{
    color: gray
  }
</style>