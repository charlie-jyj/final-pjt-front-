<template>
<div class="col">
  <div @click="openDetailReview" class="box">

      <div  class="card mt-3" style="width: 10rem;">
        <div class="card-body" style="height: 12rem;">
          <div class="review-like d-flex justify-content-end mb-3">
            <i class="fas fa-heart" style="color:orange;"></i><span>{{review.like_count}}</span>
          </div>
          <p class="card-title">{{review.title}}</p>
          <p v-if="!!Object.keys(review.movie).length" class="ref">#{{review.movie.title}}</p>
          <p v-else class="ref">#잡담</p>
        </div>
      </div>

      <div class="box-content">
          <h3 class="title">{{review.user.nickname}}</h3>
      </div>
      <ul class="icon">
          <li><a href="#"><i class="fa fa-search"></i></a></li>
      </ul>
  </div>
  <button id="reviewDetailBtn" type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#reviewDetailModal">
  </button>
</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Review',
  props: {
    review: Object,
  },
  mounted(){
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5',
    'color6', 'color7', 'color8', 'color9', 'color10',
    ]
    
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      const picked = _.sample(colors)
      card.classList.add(picked)
    })
  },
  methods: {
    openDetailReview(){  // 디테일 페이지 열기
      const reviewDetailBtn = document.querySelector('#reviewDetailBtn')
      reviewDetailBtn.click()
      this.$store.dispatch('getReviewDetail', this.review.id)
    }
  }
}
</script>

<style scoped>

.color1 { background-color: #F2BDD6; }
.color2 { background-color: #F2C9DC; }
.color3 { background-color: #B0C6D9; }
.color4 { background-color: #BBE2F2; }
.color5 { background-color: #F2E0DC; }

.color6 { background-color: #F2AEC1; }
.color7 { background-color: #F2CED8; }
.color8 { background-color: #96D9D2; }
.color9 { background-color: #C4F2D4; }
.color10 { background-color: #F2EDD0; }

.card-title {
  font-size: 1.1rem;
}

.card-subtitle{
  font-size: 0.9rem;
}

.ref {
  font-size: 0.8rem;
}

.review-like span{
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

.ref {
  background-color: rgba(242, 226, 5, 0.5);
  color: rgba(104, 120, 140, 1);
}

.box{
    background-color: #F2EEB3;
    border-radius: 0 20px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0.3s;
}
.box:hover{ background-color: #F2E205; }
.box:before,
.box:after,
.box .box-content:before,
.box .box-content:after{
    content: '';
    background-color: #F2E205;
    width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 0.4s ease-in;
}
.box:after{
    top: auto;
    bottom: 0;
    left: 100%;
}
.box .box-content:before{
    width: 5px;
    height: 100%;
    top: 100%;
    left: 0;
}
.box .box-content:after{
    width: 5px;
    height: 100%;
    top: -100%;
    left: auto;
    right: 0;
}
.box:hover:before,
.box:hover:after{
    opacity: 0.2;
    left: 0;
}
.box:hover .box-content:before,
.box:hover .box-content:after{
    opacity: 0.2;
    top: 0;
}
.box img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
.box:hover img{ opacity: 0.35; }
.box .box-content{
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 15px 0 0 15px;
    opacity: 0;
    position: absolute;
    top: 20px;
    left: 0;
    transition: all 0.45s ease;
}
.box:hover .box-content{
    opacity: 1;
    top: 0;
}
.box .title{
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin: 0 0 4px;
}
.box .post{
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: lowercase;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin: 0 0 5px;
    display: block;
}
.box .icon{
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 15px;
    right: 15px;
    transition: all 0.4s cubic-bezier(0.6, -0.8, 0.735, 0.045);
}
.box:hover .icon{
    opacity: 1;
    transform: rotate(0deg);
}
.box .icon li{ display: inline-block;  }
.box .icon li a{
    color: #fff;
    background-color: #F2E205;
    font-size: 16px;
    text-align: center;
    line-height: 38px;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: block;
    position: relative;
    transition: all 0.3s ease 0s;
}
.box .icon li  a:hover{ box-shadow: 0 0 15px rgba(0,0,0,0.5); }
.box .icon li  a:hover:after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    animation: animate 0.5s ease-out 75ms;
}
@keyframes animate{
    0%{ opacity: 0.3; }
    40%{
        opacity: 0.5;
        box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #fff, 0 0 0 10px rgba(255,255,255,0.5);
    }
    100%{
        box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #fff, 0 0 0 10px rgba(255,255,255,0.5);
        transform: scale(1.5);
        opacity: 0;
    }
}
@media only screen and (max-width:990px){
    .box { margin: 0 0 30px; }
}
</style>