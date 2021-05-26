<template>
  <div>
    <autocomplete
    :search="search"
    placeholder="영화 제목을 검색해보세요"
    aria-label="영화 제목을 검색해보세요"
    @submit="handleSubmit"
  ></autocomplete>
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import {mapGetters} from 'vuex'
import axios from 'axios'
import DRF from '@/api/drf.js'

export default {
  name: 'MovieSearch',
  data(){
    return {
      input: '',
    }
  },
  components: {
    Autocomplete
  },
  computed: {
    ...mapGetters(['AutoCompleteList']),
  },
  methods: {
    search(input) {
      this.input = input
      // input 이 입력될 때마다 이 함수가 호출되고 있다. 
      // input 값을 서버로 보내주자.
      // this.$store.dispatch('autoComplete', input)
      if (input.length < 1) { 
        console.log('이건뭐야')
        return [] }
      
      return  axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.search(input),
      headers: this.$store.getters.config,
      })
      .then(res => {
        const response = res.data
        const autoComplete = []
        response.forEach(item => autoComplete.push(item.title))
        console.log('자동완성', autoComplete, typeof(autoComplete))
        return autoComplete
        // context.commit('AUTO_COMPLETE', autoComplete)
      })  
      .catch(err => console.log(err))

      // axios로 받아온 리스트를 return 하여 자동완성을 만든다
      // return this.AutoCompleteList.filter(item => {
      //   return item.toLowerCase()
      //     .startsWith(input.toLowerCase())
      // })
  
    },
     handleSubmit(result) {
       // 이 영역은 enter가 일어났을 때 발동된다
      const search = result? result : this.input
      this.$store.dispatch('searchMovie', search)
    },
  }
}
</script>

<style>

</style>