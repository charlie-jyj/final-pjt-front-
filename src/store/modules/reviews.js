// import axios from 'axios'
// import DRF from '@/api/drf.js'
import router from '@/router/index.js'
// import cookies from 'vue-cookies'
import reviews from '@/assets/reviewList.js'

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
  }
}

const mutations = {
  SET_ALL_REVIEWS(state, reviewList){
    state.reviews = reviewList
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
  }
 
}

// 현재 페이지에서는 login 이 필수이므로 axios header에 jwt 포함하는 것 잊지말기
const actions = {
  getAllReviews(context){
    // community/ (get) 요청 보내면 read 를 위한 간략한 정보 응답
    // output: [{ id, title, user, movie, created_at }]
    const reviewList = reviews
    context.commit('SET_ALL_REVIEWS', reviewList)
    
  },
  getTop5(context){
    // community/top5 (get) 요청
    // output: [{id, title, user, movie, created_at }]
    const top5 = reviews
    context.commit('SET_TOP_5', top5)
  },
  setRef(context, ref){
    console.log('set ref', context,ref)
    context.commit('SET_REF', ref)
  },
  createReview(context, review){
    console.log(context, review)
    //  community/ (post) 에 review 보낼 것 

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
    console.log('detail', context, review_pk)
    // community/<int:review_pk>/ (get) 
    // response 
    const review = {
      user: {
        id:1,
        nickname: '유진',
      },
      id:1,
      title: '리뷰1',
      content: '리뷰내용1',
      movie: {
        title: '해리포터와 불의잔'
      },
      like_count: 5,
      user_like:[{id:2, nickname:'재명'}],
      created_at: '2021-05-23',
      updated_at: '2021-05-24',
      comments: [
        {
          id:1,
          content: '댓글1',
          user: {
            id:2,
            nickname: '재명',
          },  
        },
        {
          id:2,
          content: '댓글2',
          user: {
            id:2,
            nickname: '유진',
          },  
        },
        {
          id:3,
          content: '댓글3',
          user: {
            id:2,
            nickname: '재명',
          },  
        }
      ]
    }
    context.commit('SET_REVIEW_DETAIL', review)

    // 좋아요 체크 판별
    const likeUsers = review.user_like
    const me = context.getters.Nickname
    const like =likeUsers.some(user => {
      return user.username === me
    })
    context.commit('SET_REVIEW_LIKE', like)

  },
  setReviewUpdateForm(context, review){
    context.commit('SET_REVIEW_UPDATE_FORM', review)
  },
  updateReview(context, data){
    
    // community/<int:review_pk>/ (put)
    // title, content 필수
    console.log('review update', context, data)

    //수정 후 데이터 갱신한다.
    context.dispatch('getAllReviews')
  },
  deleteReview(context, review_pk){
    // community/<int:review_pk>/ (delete)

    console.log('review delete', review_pk)

    //삭제 후 데이터 갱신한다.
    context.dispatch('getAllReviews')
  },
  likeReview(context, review_pk){
    console.log('like', context, review_pk)
    // community/<int:review_pk>/like/ (post) 
    const like = true 
    context.commit('SET_REVIEW_LIKE', like)
  },
  createComment(context, data){
    console.log('댓글작성', context, data)
    // community/<int:review_pk>/comment/ (post) 
    // data.review_pk , {content:data.content}

    // 댓글 작성 후 detail 업데이트 
    context.dispatch('getReviewDetail', data.review_pk)
  },
  setCommentUpdateForm(context, comment){
    console.log('댓글수정준비', context, comment)
    context.commit('SET_COMMENT_UPDATE_FORM', comment)

  },
  updateReviewComment(context, data){
    console.log('댓글 수정!', context, data)
    // community/<int:review_pk>/comment/<int:comment_pk> (put) 

    // 수정 후 detail 갱신하고 update 상태값 변경
    context.commit('SET_COMMENT_UPDATE_FORM', {})
    context.dispatch('getReviewDetail', data.review_pk)
  },
  deleteReviewComment(context, data){
    console.log('댓글 삭제!', context, data)
    // community/<int:review_pk>/comment/<int:comment_pk> (delete)

    // 삭제 후 detail 갱신
    context.dispatch('getReviewDetail', data.review_pk)
  }
}

export default {
  state, getters, mutations, actions
}