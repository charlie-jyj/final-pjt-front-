<template>
  <div class="border-top pt-3">
    <div class="row">
      <div class="col-10 pe-0">
        <textarea v-model="content" class="form-control" rows="3"></textarea>
      </div>
      <div class="col-2 d-flex align-items-stretch">
        <button @click="createComment" class="btn btn-write">submit</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ReviewCommentForm',
  props: {
    review_pk: Number
  },
  data(){
    return {
      content: ''
    }
  },
  methods: {
    createComment(){
      if(this.content){
        const pack = {
          review_pk : this.review_pk,
          data: {
          content : this.content
          },
        }
        this.$store.dispatch('createComment', pack)
        this.content = '' // 초기화
      }else{
        alert('댓글을 작성해주세요..ㅠㅠ')
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
  border: 1px solid #68788C ;
}
</style>