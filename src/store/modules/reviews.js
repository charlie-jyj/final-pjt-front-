import axios from 'axios'
import DRF from '@/api/drf.js'
import router from '@/router/index.js'
// import cookies from 'vue-cookies'
// import reviews from '@/assets/reviewList.js'                

// axios로 소통할 때 jwt 없으면 안 된다                         
const state = {
 reviews : [],
 top5 : [],
 reference: {},
 openModal: false,
 reviewDetail: {},
 reviewUpdate: {},
 reviewLike: false,
 commentUpdate: {},
 reviewpage: 1,
}

const getters = {
  Reviews(state){
    return state.reviews
  },
  Top5(state){
    return state.top5
  },
  isMovieReview(state){
    return !!Object.keys(state.reference).length
  },
  Ref(state){
    return state.reference
  },
  IsOpen(state){
    return state.openModal
  },
  ReviewDetail(state){
    return state.reviewDetail
  },
  IsReviewDetailReady(state){
    return !!Object.keys(state.reviewDetail).length
  },
  ReviewUpdate(state){
    return state.reviewUpdate
  },
  IsReviewUpdateReady(state){
    return !!Object.keys(state.reviewUpdate).length
  },
  ReviewLike(state){
    return state.reviewLike
  },
  CommentUpdate(state){
    return state.commentUpdate
  },
  IsCommentUpdateReady(state){
    return !!Object.keys(state.commentUpdate).length
  },
  ReviewPage(state){
    return state.reviewpage
  }
}

const mutations = {
  SET_ALL_REVIEWS(state, reviewList){
    reviewList.forEach(review => {
      state.reviews.push(review)
    })
  },
  SET_TOP_5(state, top5){
    state.top5 = top5
  },
  SET_REF(state, ref){
    state.reference = ref
  },
  OPEN_MODAL(state, bool){
    state.openModal = bool
  },
  SET_REVIEW_DETAIL(state, review){
    state.reviewDetail = review
  },
  SET_REVIEW_UPDATE_FORM(state, review){
    state.reviewUpdate = review
  },
  SET_REVIEW_LIKE(state, like){
    state.reviewLike = like
  },
  SET_COMMENT_UPDATE_FORM(state, comment){
    state.commentUpdate = comment
  },
  ADD_REVIEW_PAGE(state,page){
    state.reviewpage = page
  },
  RESET_REVIEW_PAGE(state){
    state.reviews = []
  }
}

// 현재 페이지에서는 login 이 필수이므로 axios header에 jwt 포함하는 것 잊지말기
const actions = {
  getAllReviews(context){
    const page = context.getters.ReviewPage
    console.log(page, DRF.URL + DRF.ROUTES.reviews,)
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.reviews,
      headers: context.getters.config,
      params:{page:page}
    })
      .then(res => {
        console.log('전체 리뷰,', res.data)
        const reviewList = res.data
        context.commit('SET_ALL_REVIEWS', reviewList)
      })
      .catch(err=>console.log(err))
  },
  getTop5(context){
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.top5,
      headers: context.getters.config,
    })
      .then(res => {
        console.log('리뷰top5,', res.data)
        const top5 = res.data
        context.commit('SET_TOP_5', top5)
      })
      .catch(err=>console.log(err))
  },
  setRef(context, ref){
    console.log('set ref', context,ref)
    context.commit('SET_REF', ref)
  },
  createReview(context, review){
    axios({
      method: 'post',
      url: DRF.URL + DRF.ROUTES.reviews,
      headers: context.getters.config,
      data: review,
    })
      .then(res => {
        console.log('리뷰생성', res.data)
        context.dispatch('resetReviewPage')
        context.dispatch('addReviewPage', 1)
        context.dispatch('getAllReviews')
      })
      .catch(err => console.log(err))
  },
  goToReview(context, ref){
    //movie detail에서 글 작성으로 넘어가기 위함
    context.dispatch('setRef', ref)
    // redirect
    router.push({name:'ReviewPage'})
    // 모달 열기
    context.dispatch('openModal', true)
  },
  openModal(context, bool){
    context.commit('OPEN_MODAL', bool)
  },
  getReviewDetail(context, review_pk){
    // community/<int:review_pk>/ (get) 
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.reviewDetail(review_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('리뷰상세',res.data)
        const review = res.data
        context.commit('SET_REVIEW_DETAIL', review)
    
        // 좋아요 체크 판별
        const likeUsers = review.user_like
        const me = context.getters.Nickname
        const like =likeUsers.some(user => {
          return user.nickname === me
        })
        context.commit('SET_REVIEW_LIKE', like)
      })
      .catch(err => console.log(err))
  },
  setReviewUpdateForm(context, review){
    context.commit('SET_REVIEW_UPDATE_FORM', review)
  },
  updateReview(context, pack){
    axios({
      method: 'put',
      url: DRF.URL + DRF.ROUTES.reviewUpdateDelete(pack.review_pk),
      headers: context.getters.config,
      data: pack.data
    })
      .then(res => {
        console.log('리뷰수정', res.data)

        context.dispatch('resetReviewPage')
        context.dispatch('addReviewPage', 1)
        context.dispatch('getAllReviews') //수정 후 데이터 갱신한다.
        context.dispatch('getTop5') //수정 후 데이터 갱신한다.
      })
      .catch(err => console.log(err))
  },
  deleteReview(context, review_pk){
    axios({
      method:'delete',
      url: DRF.URL + DRF.ROUTES.reviewUpdateDelete(review_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('리뷰삭제', res.data)
        
        context.dispatch('resetReviewPage')
        context.dispatch('addReviewPage', 1)
        context.dispatch('getAllReviews')
        context.dispatch('getTop5') //수정 후 데이터 갱신한다.
      })
      .catch(err => console.log(err))
  },
  likeReview(context, review_pk){
    axios({
      method: 'post',
      url: DRF.URL + DRF.ROUTES.reviewLike(review_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('리뷰 좋아요,', res.data)
        const like = res.data.detail 
        context.commit('SET_REVIEW_LIKE', like)
        context.dispatch('getReviewDetail', review_pk)
        context.dispatch('getAllReviews')
        context.dispatch('getTop5')
      })
      .catch(err => console.log(err))
  },
  createComment(context, pack){
    axios({
      method: 'post',
      url: DRF.URL + DRF.ROUTES.comment(pack.review_pk),
      headers: context.getters.config,
      data: pack.data,
    })
      .then(res => {
        console.log('댓글작성',res.data)
        context.dispatch('getReviewDetail', pack.review_pk) // 댓글 작성 후 detail 갱신
      })
      .catch(err => console.log(err))
  },
  setCommentUpdateForm(context, comment){
    console.log('댓글수정준비', context, comment)
    context.commit('SET_COMMENT_UPDATE_FORM', comment)
  },
  updateReviewComment(context, pack){
    axios({
      method:'put',
      url: DRF.URL + DRF.ROUTES.commentUpdateDelete(pack.review_pk, pack.comment_pk),
      headers: context.getters.config,
      data: pack.data,
    })
      .then(res => {
        console.log('댓글수정', res.data),
        // 수정 후 detail 갱신하고 update 상태값 변경
        context.commit('SET_COMMENT_UPDATE_FORM', {})
        context.dispatch('getReviewDetail', pack.review_pk)  // 수정 후 디테일 갱신
      })
      .catch(err => console.log(err))
  },
  deleteReviewComment(context, pack){
    axios({
      method: 'delete',
      url: DRF.URL + DRF.ROUTES.commentUpdateDelete(pack.review_pk, pack.comment_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('댓글 삭제', res.data)
        context.dispatch('getReviewDetail', pack.review_pk) // 삭제 후 detail 갱신
      })
      .catch(err => console.log(err))
  },
  addReviewPage(context, page){
    console.log('리뷰 페이지 추가', page)
    context.commit('ADD_REVIEW_PAGE', page)
  },
  resetReviewPage(context){
    context.commit('RESET_REVIEW_PAGE')
  }
}

export default {
  state, getters, mutations, actions
}