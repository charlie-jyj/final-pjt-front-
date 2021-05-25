<template>
  <div class="scheduler-result">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default {
  name:'MovieSchedulerResult',
  components: {
    FullCalendar
  },
  props:{
    events: Array,
  },
  data() {
  return {
    calendarOptions: {
      plugins: [ dayGridPlugin, interactionPlugin ],
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick,
      events: this.events,
    }
  }
  },
   methods: {
    handleDateClick: function(arg) {
      console.log('date click! ' + arg.dateStr)
    },
  },
}
</script>

<style scoped>
  .scheduler-result{
    margin-top: 1rem;
    height: 100%;
    border: 1px dashed grey;

  }
</style>