<template>
<div class="row">
  <div class="col-1"></div>
  <div class="col-10">
    <div class="input-group pb-2 border-bottem">
      <input @keypress.enter="inputComment" v-model="comment" type="text" class="form-control" placeholder="이 영화에 대한 당신의 감상평을 적어주세요" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button @click="inputComment" class="btn btn-write" type="button">Button</button>
    </div>
  </div>
  <div class="col-1"></div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'MovieRateForm',
  props:{
    rating:Number,
    movie_pk: Number,
  },
  data(){
    return{
      comment: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    inputComment(){
      console.log('comment', this.comment, this.rating)

      const data = {
        comment: this.comment,
        rate: this.rating
      }

      const pack = {
        movie_pk: this.movie_pk,
        data,
      }

      if(this.isAuthenticated){
        this.$store.dispatch('createMovieRate',pack)
        this.comment = ''
      }else{
        alert('로그인이 필요한 서비스입니다.')
      }
 
    }
  }
}
</script>

<style scoped>
  .btn-write {
      background-color: #F2D64B;
      color: #68788C;
    }

  .btn-write:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }

</style>