<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: rgba(151, 157, 166, 1);">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{name:'MoviePage'}"><i class="fab fa-mizuni" style="color:  #F2D64B;"></i></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link v-if="!isAuthenticated" class="nav-link" aria-current="page" :to="{name:'EntryPage'}">Index</router-link> 
            </li>
            <li class="nav-item">
              <router-link v-if="isAuthenticated" class="nav-link" :to="{name:'MoviePage'}">Movie</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isAuthenticated" class="nav-link" :to="{name:'ReviewPage'}">Community</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isAuthenticated" class="nav-link" :to="{name:'ProfilePage'}">Profile</router-link>
            </li> 
            <li class="nav-item">
              <a id="logoutLink" v-if="isAuthenticated" @click="logout" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  mounted() {
    const anchors = document.querySelectorAll('a')
    anchors.forEach(a => {a.addEventListener('click', function(event){
      event.target.classList.toggle('active')
    })
      
    });
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>


<style>
  body {
    background-color: rgba(242, 238, 179, 0.7);
  }

  #navbar{
   background-color:  #979DA6;
  }

  .btn-search{
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-search:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }

  #logoutLink {
    cursor: pointer;
  }


</style>
