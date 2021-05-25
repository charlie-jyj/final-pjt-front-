<template>
  <div class="col item">
    <div @click="showMovieDetail" class="box" :style="`background-image:url(${movie.poster_path})`"> <!--movie.poster_path-->
      <div class="cover">
          <p class="name">{{movie.title}}</p>   <!--movie.title-->
          <p class="title">{{movie.series.name}}</p>  <!--movie.series.name-->
          <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
      </div>
    </div>
    <button type="button" id="showDetailBtn" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#movieDetailModal"></button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  components: {   
  },
  methods: {
    showMovieDetail(){
      this.$store.dispatch('showMovieDetail', this.movie)
      this.openDetailModal()
    },
    openDetailModal(){
      const detailBtn = document.querySelector('#showDetailBtn')
      detailBtn.click()
    }
  },
  computed: {
    ...mapGetters(['MovieDetail',])
  }
}
</script>

<style scoped>
  .item {
    cursor: pointer;
    margin-bottom: 30px;
  }

  .item .box {
     text-align: center;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     height: 18rem;
     position: relative;
     overflow: hidden
 }

  .item .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(104, 120, 140, 0.4) ;
      transition: opacity 0.15s ease-in;
      opacity: 0;
      padding-top: 80px;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15)
  }

  .item:hover .cover {
      opacity: 1
  }

  .item .name {
      font-weight: bold;
      margin-bottom: 8px
  }

  .item .title {
      text-transform: uppercase;
      font-weight: bold;
      color: #bbd8fb;
      letter-spacing: 2px;
      font-size: 13px;
      margin-bottom: 20px
  }

  .social {
      font-size: 18px
  }

  .social a {
      color: inherit;
      margin: 0 10px;
      display: inline-block;
      opacity: 0.7
  }

  .social a:hover {
      opacity: 1
  }
</style>