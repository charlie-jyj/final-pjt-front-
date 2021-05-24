<template>
  <div class="border-top pt-3">
    <ReviewComment v-for="(comment, index) in comments" :key="index" :comment="comment" :review_pk="review_pk"/>
  </div>
</template>

<script>
import ReviewComment from '@/components/community/ReviewComment'
export default {
  name: 'ReviewCommentList',
  components: {ReviewComment},
  props: {
    comments: Array,
    review_pk:Number,
  }
}
</script>

<style>

</style>