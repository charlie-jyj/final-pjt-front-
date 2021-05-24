<template>
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-5">
    <Review v-for="(review, index) in Reviews" :key="index" :review="review"/>
  </div>
</div>
</template>

<script>
import Review from '@/components/community/Review.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'NewReviewList',
  components: {Review},
  computed: {
    ...mapGetters(['Reviews'])
  }
}
</script>

<style>

</style>