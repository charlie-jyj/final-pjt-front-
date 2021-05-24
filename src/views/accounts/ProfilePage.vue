<template>
<div class="container emp-profile">
  <div class="row">
      <div class="col-md-4">
          <div class="profile-img">
              <img :src="UserImg" alt=""/>
          </div>
      </div>
      <div class="col-md-6">
          <div class="profile-head">
                      <h5>
                        {{Nickname}}
                      </h5>
                      <h6>
                        {{Username}}
                      </h6>
                      <p class="proile-rating">RANKINGS : <span>8/10</span></p>
          </div>
      </div>
      <div class="col-md-2">
          <input type="button" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
      </div>
  </div>
  <div class="row">
      <div class="col-md-4">
          <div class="profile-work">
              <p>제작자</p>
              <a href="">10조</a><br/>
              <a href="">팀장 류태규</a><br/>
              <a href="">팀원 정유진</a>
              <p>사용 스택</p>
              <a href="">python</a><br/>
              <a href="">django</a><br/>
              <a href="">javascript</a><br/>
              <a href="">HTML5</a><br/>
              <a href="">CSS</a><br/>
          </div>
      </div>
      <div class="col-md-8">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Movie Scheduler</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Extra</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="container movie-scheduler-wrapper"></div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">b</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">c</div>
        </div>
      </div>
  </div>            
        </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'ProfilePage',
  computed: {
    ...mapGetters(['Nickname','Username', 'UserImg', ])
  },
  methods: {
    ...mapActions(['getProfile'])
  },
  created(){
    this.getProfile()
  }
}
</script>

<style scoped>
  .profile-wrapper{
    margin-top: 3rem;
  }

  .movie-scheduler-wrapper{
    background-color: khaki;
    height: 50vh;
  }

  .emp-profile{
      padding: 3%;
      margin-top: 5rem;
      margin-bottom: 3%;
      border-radius: 0.5rem;
      background: #fff;
  }
  .profile-img{
      text-align: center;
  }
  .profile-img img{
      width: 70%;
      height: 100%;
  }
  .profile-head h5{
      color: #333;
  }
  .profile-head h6{
      color: #0062cc;
  }
  .profile-edit-btn{
      border: none;
      border-radius: 1.5rem;
      width: 70%;
      padding: 2%;
      font-weight: 600;
      color: #6c757d;
      cursor: pointer;
  }
  .proile-rating{
      font-size: 12px;
      color: #818182;
      margin-top: 5%;
  }
  .proile-rating span{
      color: #495057;
      font-size: 15px;
      font-weight: 600;
  } 
  .profile-work{
      padding: 14%;
      margin-top: -15%;
  }
  .profile-work p{
      font-size: 12px;
      color: #818182;
      font-weight: 600;
      margin-top: 10%;
  }
  .profile-work a{
      text-decoration: none;
      color: #495057;
      font-weight: 600;
      font-size: 14px;
  }
  .profile-work ul{
      list-style: none;
  }

</style>