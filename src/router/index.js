import Vue from 'vue'
import VueRouter from 'vue-router'
import EntryPage from '@/views/accounts/EntryPage.vue'
import ProfilePage from '@/views/accounts/ProfilePage.vue'
import MoviePage from '@/views/movies/MoviePage.vue'
import ReviewPage from '@/views/community/ReviewPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EntryPage',
    component: EntryPage
  },
  {
    path: '/movie',
    name: 'MoviePage',
    component: MoviePage
  },
  {
    path: '/community',
    name: 'ReviewPage',
    component: ReviewPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
