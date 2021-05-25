<template>
    <div id="reviewFormModal" class="modal right fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  role="dialog" aria-labelledby="signupModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">글 남기기</h5>
            <button type="button" @click="closeModal" class="btn-close" aria-label="Close"></button>
            <button type="button" id="reviewFormClose" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"> 
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <div v-if="isMovieReview" class="ref mt-5">
                  <span>#</span><span>{{Ref.movie.title}}</span>
                </div>
                <div class="title mt-3">
                  <div class="mb-3">
                    <label for="reviewTitle" class="form-label">글 제목</label>
                    <input v-model="title" type="text" class="form-control" id="reviewTitle" placeholder="title">
                  </div>
                </div>
                <div class="content mt-3">
                  <div class="mb-3">
                    <label for="reviewContent" class="form-label">글 내용</label>
                    <textarea v-model="content" class="form-control" id="reviewContent" rows="10" placeholder="content"></textarea>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-write" @click="createReview" type="button">작성하기</button>
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
  name: 'ReviewForm',
  data(){
    return {
      title: '',
      content: '',
    }
  },
  computed: {
    ...mapGetters(['isMovieReview', 'Ref'])
  },
  methods: {
    createReview(){
      // server 에 글 post
      const review = {
        title: this.title,
        content: this.content,
        movie: this.isMovieReview? this.Ref.movie.id : null 
      }

      console.log(review.title, review.content)

      if (review.title&&review.content){

        this.closeModal()
        // 서버 통신
        this.$store.dispatch('createReview', review)

      } else{
        alert('비어 있는 것 같은데요, 한 번만 다시 확인해주세요.')
      }
    },
    closeModal(){
      // 모달 닫기
      const reviewFormClose = document.querySelector('#reviewFormClose')
      reviewFormClose.click()

      // reference 초기화, isOpen 초기화, title, content 초기화
      this.$store.dispatch('setRef', {})
      this.$store.dispatch('openModal', false)
      this.title = ''
      this.content = ''
    }
  },
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