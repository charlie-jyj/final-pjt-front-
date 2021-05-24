<template>
  <div class="border-top pt-3">
    <ReviewComment v-for="(comment, index) in comments" :key="index" :comment="comment"/>
  </div>
</template>

<script>
import ReviewComment from '@/components/community/ReviewComment'
export default {
  name: 'ReviewCommentList',
  components: {ReviewComment},
  props: {
    comments: Array,
  }
}
</script>

<style>

</style>