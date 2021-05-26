<template>
  <div class="mt-5">
    <div>
      <FullCalendar
        :options='calendarOptions'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
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
      plugins: [ 
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin ],
       headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      select: this.handleDateSelect,
      eventClick: this.handleEventClick,
      eventsSet: this.handleEvents,
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick,
      events: this.events,
    }
  }
  },
   methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },

    handleDateSelect(selectInfo) {
      console.log(selectInfo)
      // let title = prompt('Please enter a new title for your event')
      // let calendarApi = selectInfo.view.calendar

      // calendarApi.unselect() // clear date selection

      // if (title) {
      //   calendarApi.addEvent({
      //     id: createEventId(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   })
      // }
    },

    handleEventClick(clickInfo) {
      alert(`click info '${clickInfo.event.title}'`)
    },

    handleEvents(events) {
      this.currentEvents = events
    }
  },
}
</script>

<style scoped>
  .scheduler-result{
    margin-top: 1rem;
    height: 100%;
    border: 1px dashed grey;

  }

  .fc-event {
    font-size: .85em;}
</style>