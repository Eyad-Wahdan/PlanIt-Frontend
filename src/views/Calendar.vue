<template>
  <div class="vueBackground">
  <h1 style="font-family:'Times New Roman',serif;">Have a look at your Calendar!</h1>
  <br>
  <el-calendar>
    <template #dateCell="cell">
      <div class="cell" :class="{ current: cell.isCurrent }">
        <span class="cellDate">{{ cell.data.day.slice(8) }}</span>
        <br>
        <span v-for="event in getTodaysEvents(cell, events)" :key="event.id">
          <el-button v-if="event.event.length > 6" id="eventButton" type="primary" round data-bs-toggle="modal" data-bs-target="#eventModal">
            {{ event.event.slice(0, 12) }}...
          </el-button>
          <el-button v-else id="eventButton" type="primary" round data-bs-toggle="modal" data-bs-target="#eventModal">
            {{ event.event }}
          </el-button>
          <div id="eventModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">{{ event.event }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <div class="formDate">
                            <label class="label">&#128197;Date:</label>
                             <el-input disabled class="input" :placeholder="formatDate(event.start)"/>
                          </div>
                         <br>
                         <div class="formStart">
                            <label class="label">&#x1F551;Start:</label>
                             <el-input disabled class="input" :placeholder="event.start.toLocaleTimeString().slice(0, -3)"/>
                         </div>
                        <br>
                        <div class="formFinish">
                            <label class="label">&#x1F556;Finish:</label>
                             <el-input disabled class="input" :placeholder="event.finish.toLocaleTimeString().slice(0, -3)"/>
                         </div>
                        <br>
                        <div class="formEvent">
                            <label class="label">&#x1F4BC;Event:</label>
                             <el-input disabled class="input" :placeholder="event.event"/>
                         </div>
                        <br>
                        </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Done</button>
                      </div>
                    </div>
                  </div>
                </div>
              <br>
        </span>
      </div>
    </template>
  </el-calendar>
  <div id="stars">
    <div id="stars2">
      <div id="stars3">
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      events: []
    }
  },
  methods: {
    formatDate (date) {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getUTCFullYear()
      return `${day}.${month}.${year}`
    },
    setDateValue () {
      const day = this.formatDate(this.event.start)
      document.getElementById('dateInput').value = day
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

h1 {
  color: white;
}

.el-calendar {
  border-collapse: collapse;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 97%;
  min-width: 400px;
  font-family: Helvetica, serif;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px 5px 0 0;
}

#eventButton {
  height: 20px;
  width: 130px;
  position: center;
  margin-left: auto;
  margin-right: auto;
  margin-buttom: 1px;
  background-color: #1f3ade;
  border-color: #1f3ade;
}

.modal-title {
  font-family: "Verdana", sans-serif;
}

.label {
  font-family: "Verdana", sans-serif;
  float: left;
}

.input ::placeholder{
  font-weight: bold;
  background-color: white;
}

.vueBackground {
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(#090042, #011c93, #090042);
}
</style>
