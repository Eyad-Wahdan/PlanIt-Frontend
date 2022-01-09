<template>
  <h1 style="font-family:'Times New Roman',serif;">Have a look at your Calendar!</h1>
  <br>
  <el-calendar>
    <template #dateCell="cell">
      <div class="cell" :class="{ current: cell.isCurrent }">
        <span class="cellDate">{{ cell.data.day.slice(8) }}</span>
        <br>
        <span v-for="event in getTodaysEvents(cell, events)" :key="event.id">
          <el-button v-if="event.event.length > 6" id="eventButton" type="primary" round data-bs-toggle="modal" data-bs-target="#eventModal">
            {{ event.event.slice(0, 8) }}...
          </el-button>
          <el-button v-else id="eventButton" type="primary" round data-bs-toggle="modal" data-bs-target="#eventModal">
            {{ event.event }}
          </el-button>
<!--          <span class="spacing"/>-->
                <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                       <div class="modal-body">
                         <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label">Email address</label>
                           <input id="exampleFormControlInput1" class="form-control" type="text" placeholder="Readonly input here…" readonly>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              <br>
        </span>
      </div>
    </template>
  </el-calendar>
</template>

<script>
export default {
  data () {
    return {
      events: []
    }
  },
  methods: {
    getDay (dayString) {
      var date = new Date(dayString)
      return date.getDay()
    },
    async loadEvents () {
      this.events = []
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/termin/'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      const responseEvents = []
      await fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(event => {
          event.start = new Date(event.start)
          event.finish = new Date(event.finish)
          responseEvents.push(event)
        }))
        .catch(error => console.log('error', error))
      this.events = responseEvents
      // console.log(this.events)
    },
    getTodaysEvents (cell, currentEvents) {
      // console.log('start')
      const d = cell.data.date
      const events = currentEvents
        .filter(({ start }) => start.toDateString() === d.toDateString())
        .sort(
          ({ start: aStart }, { start: bStart }) =>
            aStart.getTime() - bStart.getTime()
        )
      // console.log(events)
      return events
    }
  },
  mounted () {
    this.loadEvents()
  }
}
</script>

<style scoped>
.el-calendar {
  border-collapse: collapse;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 97%;
  min-width: 400px;
  font-family: Helvetica ,serif;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

#eventButton {
  height: 20px;
  width: 130px;
  position: center;
  margin-left: auto;
  margin-right: auto;
  margin-buttom: 1px;

}

/*.cell.current .text {*/
/*  background: purple;*/
/*  color: #fff;*/
/*}*/

/*.cell .event {*/
/*  position: absolute;*/
/*  width: 100px;*/
/*  height: 100px;*/
/*  background: black;*/
/*  border-radius: 50%;*/
/*  bottom: 0px;*/
/*  left: 50%;*/
/*  transform: translateX(-50%);*/
/*}*/
</style>
