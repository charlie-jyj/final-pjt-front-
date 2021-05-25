<template>
  <div class="scheduler-form-wrapper d-flex justify-content-center">
    <div class="card" style="width: 25rem;">
    <div class="card-body">
      <h5 class="card-title">Movie Schedule Maker</h5>
      <p class="card-subtitle mb-2 text-muted info-text">영화를 감상할 수 있는 시간을 입력!</p>
    
      <div class="form">
        <div class="form-select-wrapper">
          <select id="seriesSelect" class="form-select" aria-label="Default select example">
            <option selected value="">전체</option>
            <option value="1">마블</option>
            <option value="2">DC</option>
            <option value="3">해리포터</option>
            <option value="4">스타워즈</option>
            <option value="5">반지의제왕</option>
          </select>
        </div>
        <div id="formItems">
          <div class="form-item d-flex flex-row">
            <input class="form-control" type="date" name="date">
            <input class="form-control" type="number" placeholder="분" min="0" max="1440" name="time">
          </div>
        </div>
        <div class="form-btn d-flex justify-content-end mt-3">
        <button @click="addItem" class="btn btn-sm btn-outline-secondary">+</button>
        </div>
       <div class="d-grid gap-2 mt-4">
        <button @click="getMovieSchedule" class="btn btn-start" type="button">start</button>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSchedulerForm',
  methods: {
    getMovieSchedule(){
      const series = parseInt(document.querySelector('#seriesSelect').value)

      const dateInput = document.querySelectorAll('input[name=date]')
      const dates = []
      dateInput.forEach(input => {
        dates.push(input.value)
      })
      
      const timeInput = document.querySelectorAll('input[name=time]')
      const minutes = []
      timeInput.forEach(input => {
        minutes.push(parseInt(input.value))
      })

      const len = dates.length
      const times = []
      for(let i=0; i<len; i++){
        const obj = {}
        obj.date = dates[i]
        obj.time = minutes[i]
        times.push(obj)
      }

      const data = {
        series, times
      }

      // 서버와 통신
      this.$store.dispatch('getMovieSchedule', data)

      // 모달 닫기
      document.querySelector('#movieScheduleModalClose').click()
    },
    addItem(){
      const items = document.querySelector('#formItems')

      const div = document.createElement('div')
      const classes = ['form-item', 'd-flex', 'flex-row', 'mt-2']
      div.classList.add(...classes)

      const date = document.createElement('input')
      date.setAttribute('type','date')
      date.setAttribute('name', 'date')
      date.classList.add('form-control')

      const number = document.createElement('input')
      number.setAttribute('type', 'number')
      number.setAttribute('min', '0')
      number.setAttribute('max', '1440')
      number.setAttribute('name', 'time')
      number.setAttribute('placeholder', '분')
      number.classList.add('form-control')

      div.appendChild(date)
      div.appendChild(number)

      items.appendChild(div)
    }
  }
}
</script>

<style scoped>
  .scheduler-form-wrapper{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .form-select-wrapper{
    margin-bottom: 2rem;
  }

  .info-text{
    font-size: 0.8rem;
  }

  .btn-start {
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-start:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }

</style>