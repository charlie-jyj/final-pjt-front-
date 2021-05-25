<template>
  <div class="card mt-3">
  <div class="card-body">
    <div class="d-flex flex-row justify-content-between">
      <div>
        <star-rating :star-size="20" :rating="rate.rate" :read-only="true" :increment="0.01"></star-rating>
      </div>
      <div>
       <button @click="deleteRate" v-if="rate.user.nickname === Nickname" class="btn btn-sm"><i class="fas fa-times"></i></button>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <div class="me-2">
        {{rate.comment}}
      </div>
      <div>
        <p class="mb-0 rate-writer text-muted">by {{rate.user.nickname}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import StarRating from 'vue-star-rating'
export default {
  name: 'MovieRate',
  props: {
    rate: Object,
  },
  components: {
    StarRating,
  },
  computed: {
    ...mapGetters(['Nickname', 'MovieDetail'])
  },
  methods: {
    deleteRate(){
      const movie_pk = this.MovieDetail.id // 나중에 axios 할 때 수정
      this.$store.dispatch('deleteMovieRate', movie_pk)
    },
  }
}
</script>

<style scoped>
  .rate-writer {
    font-size: 0.8rem;
  }
</style>