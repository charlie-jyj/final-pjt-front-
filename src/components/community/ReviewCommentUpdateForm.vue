<template>
  <div class="border-top pt-3">
    <div class="row">
      <div class="col-10 pe-0">
        <textarea v-model="content" class="form-control" rows="3"></textarea>
      </div>
      <div class="col-2 d-flex align-items-stretch">
        <button @click="updateReviewComment" class="btn btn-write">submit</button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'ReviewCommentUpdateForm',
  props: {
    review_pk:Number,
  },
  data(){
    return {
      content: '!@#$',
    }
  },
  computed: {
    ...mapGetters(['CommentUpdate'])
  },
  mounted(){
    if(this.content === '!@#$'){
      this.content = this.CommentUpdate.content
    }
  },
  methods: {
    updateReviewComment(){
      const data = {
        review_pk: this.review_pk,
        comment_pk: this.CommentUpdate.id, // comment 자체이기 때문에
        content: this.content
      }

      this.$store.dispatch('updateReviewComment', data)
    }
  }
}
</script>

<style>
.btn-write {
    background-color: #68788C;
    color: #F2EEB3;
  }

.btn-write:hover {
  background-color: #F2EEB3;
  color: #68788C;
  border: 1px solid #68788C ;
}
</style>