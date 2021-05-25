<template>
  <div class="border p-2">
    <div class="comment-header d-flex flex-row justify-content-between">
      <div class="d-flex align-items-center">
        <p class="comment-user mb-0">{{ comment.user.nickname }}</p>
      </div>
      <div v-show="comment.user.nickname === Nickname" class="buttons">
        <button @click="setCommentUpdateForm(comment)" class="btn btn-sm btn-outline-light"><i class="far fa-edit"></i></button>
        <button @click="deleteReviewComment" class="btn btn-sm btn-outline-light"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
    <div class="comment-body mt-2 mb-2">
      {{comment.content}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'ReviewComment',
  props: {
    comment: Object,
    review_pk:Number,
  },
  computed: {
    ...mapGetters(['Nickname'])
  },
  methods: {
    ...mapActions(['setCommentUpdateForm']),
    deleteReviewComment(){
      const pack = {
        review_pk : this.review_pk,
        comment_pk : this.comment.id
      }

      this.$store.dispatch('deleteReviewComment', pack)
    }
  }
}
</script>

<style scoped>
  .comment-user{
    font-size:0.8rem;
  }
</style>