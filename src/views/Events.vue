<template>
  <h1 style="font-family:'Times New Roman',serif;">Have a look at your Events!</h1>
  <div>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Date</th>
        <th>Start-Time</th>
        <th>Finish-Time</th>
        <th>Event</th>
        <th>
          <button id="refreshButton" type="button" class="btn btn-outline-primary" @click="loadEvents()">Refresh</button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="noItem" v-if="events.length === 0">
        <td colspan=6>Ups! There are no events in your list!</td>
      </tr>
      <tr v-for="event in events" :key="event.id">
        <td>{{ event.id }}</td>
        <td>{{ formatDate(event.start) }}</td>
        <td>{{ event.start.toLocaleTimeString().slice(0, -3) }}</td>
        <td>{{ event.finish.toLocaleTimeString().slice(0, -3) }}</td>
        <td>{{ event.event }}</td>
        <td class="deleteButton">
          <button type="button" class="btn btn-outline-danger" @click="erase()">Delete</button>
        </td>
      </tr>
      <tr>
        <td></td>
        <td> <input class="input-group-text" v-model="dateField" placeholder="dd.mm.yyyy"> </td>
        <td> <input class="input-group-text" v-model="startTimeField" placeholder="Start-Time"> </td>
        <td> <input class="input-group-text" v-model="finishTimeField" placeholder="Finish-Time"> </td>
        <td> <input class="input-group-text" v-model="eventField" placeholder="Event" @keyup.enter="create()"> </td>
        <td> <button type="button" class="btn btn-outline-success" @click="create()">Create</button> </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'Events',
  data () {
    return {
      events: [],
      dateField: '',
      startTimeField: '',
      finishTimeField: '',
      eventField: ''
    }
  },
  methods: {
    formatDate (date) {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getUTCFullYear()
      return `${day}.${month}.${year}`
    },
    isValidDateFormat (date) {
      return date.match(/\d{2}.\d{2}.\d{4}?$/) !== null
    },
    isValidDate (dateString) {
      const date = new Date(dateString)
      return date instanceof Date && !isNaN(date)
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
    },
    async erase () {
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
    },
    create: function () {
      if ((this.dateField !== '') && (this.startTimeField !== '') && (this.finishTimeField !== '') && (this.eventField !== '')) {
        const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
        const endpoint = baseUrl + '/termin/'
        const date = this.dateField.split('.').reverse().join('-')
        const startDate = new Date(date + ' ' + this.startTimeField)
        const finishDate = new Date(date + ' ' + this.finishTimeField)
        if (!this.isValidDate(date) || !this.isValidDate(startDate) || !this.isValidDate(finishDate) || this.eventField === ' ' ||
          finishDate <= startDate) {
          ElMessage.error('Oops, check your input!')
          return
        }
        const data = {
          start: startDate,
          finish: finishDate,
          event: this.eventField
        }
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        fetch(endpoint, requestOptions)
          .then(data => {
            console.log('Created successfully', data)
            this.loadEvents()
            this.dateField = ''
            this.startTimeField = ''
            this.finishTimeField = ''
            this.eventField = ''
            ElMessage({
              message: 'Congrats, your event was created!',
              type: 'success'
            })
          })
          .catch(error => console.log('error', error))
      } else {
        ElMessage({
          message: 'Warning, your event is not complete!',
          type: 'warning'
        })
      }
    }
  },
  mounted () {
    this.loadEvents()
  }
}
</script>

<style scoped>

h1 {
  margin: 0;
  display: inline-block;
}

#refreshButton {
  background-color: #4169E1;
  color: #ffffff;
  border-color: white;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  min-width: 400px;
  font-family: arial, sans-serif;
  width: 97%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 40px rgb(0, 0, 0, 0.20);
}

table thead {
  background-color: #4169E1;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

td, th:not(last-of-type) {
  padding: 12px 15px;
  border-right: 1px solid #eeeeee;
  text-align: left;
}

th:last-of-type {
  border-left: none;
}

th:nth-last-of-type(2) {
  border-right: none;
}

tbody td {
  border-bottom: 1px solid #dddddd;
}

tbody td:last-of-type {
  background-color: white;
  text-align: center;
  width: 100px;
}

tr:hover td {
  background-color: #cbcaca;
}

button {
  background-color: white;
}

.noItem td {
  text-align: center;
}
</style>
