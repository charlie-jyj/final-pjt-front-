// import axios from 'axios'
// import DRF from '@/api/drf.js'
// import router from '@/router/index.js'
import cookies from 'vue-cookies'

const state = {
 token: cookies.get('user-token'),
}

const getters = {
 isAuthenticated(state){
   return state.token? true: false
 }
}

const mutations = {
 SET_TOKEN(state, token){
   state.token = token
 }
}

const actions = {
 createUser(context, signupInfo) {
  console.log(context, signupInfo)
  // axios 로 통신해서 auth/registration/ 로 username, password1, password2 보낼 것 
  // response로 key 발급받으면 일단 cookie에 저장해둔다
  const token = '12345'
  context.commit('SET_TOKEN', token)
  cookies.set('user-token', '12345', '1d')
 },
}

export default {
  state, getters, mutations, actions
}