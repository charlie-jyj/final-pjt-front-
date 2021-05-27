<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="mt-2">
          <div class="img-wrapper">
            <img src="@/assets/images/accounts/curious.png" style='height: 100%; width: 100%; object-fit: contain' alt="qurious-cat">
          </div>
          <p class="text-center">
            "제가 당신이 어떤 사람인지 맞춰볼게요."
          </p>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
               <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="`width: ${progress[round]}%;`" :aria-valuenow="`${progress[round]}`" aria-valuemin="0" aria-valuemax="100" style="background-color:#F2D64B;">{{progress[round]}}%</div>
                </div>
                <p class="text-start greeting">{{greeting[round]}}</p>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
        <div class="card question">
          <div class="card-body">
            <h6 class="card-title">
              Q{{round}}>>{{ CharacterSurvey[current].content }}
            </h6>
            <div class="d-flex justify-content-end">
              <input @click="checkValue" type="radio" value="true" class="btn-check" name="options" id="yes" autocomplete="off">
              <label class="btn btn-sm option" for="yes">네</label>
              <input @click="checkValue" type="radio" value="false" class="btn-check" name="options" id="no" autocomplete="off">
              <label class="btn btn-sm option" for="no">아니오</label>
            </div>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import _ from 'lodash'

export default {
  name: 'SignupSurvey',
  data(){
    return {
      current: 1,
      round: 1,
      progress: [0, 33, 68, 99],
      greeting: ['','시작해볼까요?','과학적으로 분석중이에요','거의 다 왔어요',],
      adjective: [ 
        '귀여운',
        '새침한',
        '사랑스러운',
        '깔끔떠는',
        '저열한',
        '겁많은',
        '가난한',
        '욕심 많은',
        '화를 참지 못하는',
        '꿈이 큰',
        '수줍은',
        '섬세한',
        '채식주의자',
        '육식주의자',
        '잠이 많은',
        '건강한',
        '잠꾸러기',
        '잔병치레가 많은',
        '관대한',
        '위대한',
        '깜찍한',
        '자기애가 강한',
        '애교 많은',
        '불의를 참는',
        '말 많은',
        '억울한',
        '얼렁뚱땅',
        '애묘인',
        '애견인',
        '많이 먹는',
        '귀신 잡는',
        '싹수가 노란',
        '세계를 정복 할',
        '아름다운',
        '귀염둥이'
        ]
    }
  },
  methods: {
    checkValue(event){
      const answer = event.target.value
      if (this.round!==3 && answer === 'true'){
        this.current = this.current*2 
        this.round += 1
      } else if (this.round!==3 && answer === 'false') {
        this.current = this.current*2 + 1
        this.round += 1
      } else if (this.round === 3) {
        const adjective = _.sample(this.adjective)
        const final = answer === 'true'? this.current*2 : this.current*2 + 1
        const nickname = adjective+' '+ this.CharacterSurvey[final].character.name
        
        const data = {
          nickname,
          user_img: this.CharacterSurvey[final].character.img_url 
        }

        this.$store.dispatch('setNickname', data)
        this.current = 1 // 초기화
        this.round = 1

        this.$emit('complete-all-survey')
      }
    }
  },
  computed: {
    ...mapGetters(['CharacterSurvey'])
  }, 
}
</script>

<style scoped>
  .greeting {
    font-size: 0.8rem;
    color: grey;
  }

  .img-wrapper {
    height: 40vh;
  }

  .question {
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  }

  .option {
    background-color: #F2D64B;
    color: #68788C;
    margin-left: 1rem;
  }

  .option:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }
</style>