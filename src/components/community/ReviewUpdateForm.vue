<template>
    <div id="reviewUpdateFormModal" class="modal right fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  role="dialog" aria-labelledby="signupModal">
      <div class="modal-dialog modal-lg">
        <div v-if="IsReviewUpdateReady" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">수정하기</h5>
            <button type="button" id="reviewUpdateFormClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"> 
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <div v-if="!!Object.keys(ReviewUpdate.movie).length" class="ref mt-5">
                  <span>#</span><span>{{ReviewUpdate.movie.title}}</span>
                </div>
                <div class="title mt-3">
                  <div class="mb-3">
                    <label for="ReviewUpdateTitle" class="form-label">글 제목</label>
                    <input type="text" class="form-control" 
                    id="reviewUpdateTitle" placeholder="title"
                      v-model="title">
                  </div>
                </div>
                <div class="content mt-3">
                  <div class="mb-3">
                    <label for="reviewUpdateContent" class="form-label">글 내용</label>
                    <textarea v-model="content" class="form-control" id="reviewUpdateContent" rows="10" placeholder="content">
                    </textarea>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button @click="updateReview" class="btn btn-write" type="button">작성하기</button>
                </div>
              </div>
              <div class="col-1"></div>  
            </div>         
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ReviewUpdateForm',
  data(){
    return {
      title: '@#$%',
      content: '@#$%',
    }
  },
  computed: {
    ...mapGetters(['ReviewUpdate', 'IsReviewUpdateReady'])
  },
  methods: {
    updateReview(){
      // 전송할 데이터 준비
      const pack = {
        review_pk: this.ReviewUpdate.id,
        data:{
          title: this.title,
          content: this.content,
        }
      }
      // 서버와 통신
      this.$store.dispatch('updateReview', pack)
      // 뒷정리 
      const reviewUpdateFormClose = document.querySelector('#reviewUpdateFormClose')
      reviewUpdateFormClose.click()
    },
  },
  updated(){
    if (this.content === '@#$%'){
      this.content = this.ReviewUpdate.content
    }

    if(this.title === '@#$%'){
      this.title = this.ReviewUpdate.title
    }
  }
}
</script>

<style scoped>
.ref {
  background-color: rgba(242, 226, 5, 0.5);
  color: rgba(104, 120, 140, 1);
}

.btn-write {
    background-color: #F2D64B;
    color: #68788C;
  }

.btn-write:hover {
  background-color: #F2EEB3;
  color: #68788C;
  border: 1px solid #68788C ;
}

.label {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}
</style>