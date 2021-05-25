<template>
<div>
  <div class="modal fade" id="reviewDetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div v-if="IsReviewDetailReady" class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{{ReviewDetail.title}}</h5>
        <button id="reviewDetailClose" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container mainboard">
          <div class="reivew-header mb-3 d-flex flex-row justify-content-between">
            <div class="review-writer d-flex align-items-center">
            <i class="fas fa-crown me-3" style="color:#F2D64B"></i>
            <span>{{ReviewDetail.user.nickname}}</span>
            </div>
            <div class="review-like d-flex">
              <button @click="likeReview(ReviewDetail.id)" v-if="ReviewLike" class="btn"><i class="fas fa-heart" style="color:#F2D64B"></i></button>
              <button @click="likeReview(ReviewDetail.id)" v-else class="btn"><i class="fas fa-heart"></i></button>
              <span class="align-self-center">{{ReviewDetail.user_like_count}}</span>
            </div>
          </div>
          <div class="review-content border p-3">
            {{ReviewDetail.content}}
          </div>
          <div v-if="!!Object.keys(ReviewDetail.movie).length" class="review-footer d-flex justify-content-end">
            #{{ ReviewDetail.movie.title }}
          </div>
          <div class="review-comment-list mt-5">
            <p>코멘트({{ReviewDetail.comment_set.length}})</p>
            <ReviewCommentList :review_pk="ReviewDetail.id" :comments="ReviewDetail.comment_set"/>
          </div>
          <div class="review-comment-form mt-5">
            <p>코멘트 작성</p>
            <ReviewCommentUpdateForm v-if="IsCommentUpdateReady" :review_pk="ReviewDetail.id"/>
            <ReviewCommentForm v-else :review_pk="ReviewDetail.id"/>
          </div>

        </div>
      </div>
      <div v-if="ReviewDetail.user.nickname === Nickname"  class="modal-footer">
        <button id="reviewUpdateFormOpen" class="btn btn-write d-none" data-bs-toggle="modal" data-bs-target="#reviewUpdateFormModal"></button>
        <button @click="updateReview" type="button" class="btn btn-light">수정</button>
        <button @click="deleteReview" type="button" class="btn btn-secondary">삭제</button>
      </div>
    </div>
  </div>
</div>
<ReviewUpdateForm/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ReviewCommentList from '@/components/community/ReviewCommentList.vue'
import ReviewCommentForm from '@/components/community/ReviewCommentForm.vue'
import ReviewCommentUpdateForm from '@/components/community/ReviewCommentUpdateForm.vue'
import ReviewUpdateForm from '@/components/community/ReviewUpdateForm.vue'

export default {
  name: 'ReviewDetail',
  components: {
    ReviewCommentList, ReviewCommentForm, ReviewUpdateForm, ReviewCommentUpdateForm
  },
  computed: {
    ...mapGetters(['ReviewDetail', 'Nickname', 'IsReviewDetailReady', 'ReviewLike', 'IsCommentUpdateReady'])
  },
  methods: {
    updateReview(){
      //지금 모달 끄고
      const reviewDetailClose = document.querySelector('#reviewDetailClose')
      reviewDetailClose.click()

      //update 준비
      this.$store.dispatch('setReviewUpdateForm', this.ReviewDetail)

      //수정 모달 켜서 내용 뿌려야..
      const reviewUpdateFormOpen = document.querySelector('#reviewUpdateFormOpen')
      reviewUpdateFormOpen.click()
    },
    deleteReview(){

      // 지금 모달 끄고
      const reviewDetailClose = document.querySelector('#reviewDetailClose')
      reviewDetailClose.click()

      // server 와 통신하러 go
      this.$store.dispatch('deleteReview', this.ReviewDetail.id)

    },
    ...mapActions(['likeReview'])
  },
}
</script>

<style scoped>

 .modal-content {
    height: 100%;
		overflow-y: auto;
    background-color: rgba(151, 157, 166, 0.8);
    color: white;
  }

  .review-footer{
    font-size: 0.8rem;
  }


</style>