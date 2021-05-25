<template>
   <div class="container review-page-wrapper">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="button-wrapper row">
          <div class="col-11"></div>
          <div class="col-1">
            <button id="reviewFormOpen" class="btn btn-write" data-bs-toggle="modal" data-bs-target="#reviewFormModal">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>
        <div class="top5-wrapper">
          <p class="fw-bold">인기글 TOP5</p>
          <Top5ReviewList/>
        </div>
        <div class="review-list-wrapper">
          <p class="fw-bold">최신글</p>
          <NewReviewList/>
        </div>
        <ReviewDetail/>
        <ReviewForm/>
        <!-- <ReviewUpdateForm/> -->
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Top5ReviewList from '@/components/community/Top5ReviewList.vue'
import NewReviewList from '@/components/community/NewReviewList.vue'
import ReviewDetail from '@/components/community/ReviewDetail.vue'
import ReviewForm from '@/components/community/ReviewForm.vue'
// import ReviewUpdateForm from '@/components/community/ReviewUpdateForm.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'ReviewPage',
  components: {
    Top5ReviewList, NewReviewList, ReviewDetail, ReviewForm,
  },
  methods: {
    ...mapActions(['getAllReviews', 'getTop5']),
     scroll(){
       
      if(this.CurrentPage === 2){
       window.onscroll = () => {
          if (Math.ceil(window.pageYOffset+window.innerHeight) === document.documentElement.offsetHeight){
            console.log('end')
            const current = this.ReviewPage
            this.$store.dispatch('addReviewPage', current+1)
            this.getAllReviews()

          }  
      }
      }
    }
  },
  computed: {
    ...mapGetters(['IsOpen', 'ReviewPage','CurrentPage'])
  },
  created(){
    this.getTop5()
    this.getAllReviews()  
    console.log('나 지금 2페이지')
    this.$store.dispatch('currentPage', 2)
  },
  mounted(){ 
    if(this.IsOpen){
      const reviewFormOpen = document.querySelector('#reviewFormOpen')
      reviewFormOpen.click()
    }

    this.scroll()
  }
}
</script>

<style scoped>
.button-wrapper{
  margin-top: 8rem;
}

.top5-wrapper{
  margin-top: 4rem;
}

.review-list-wrapper{
  margin-top: 8rem;
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

</style>