<template>
  <h1 style="font-family:'Times New Roman',serif;">Have a look at your Events!</h1>
  <div>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Date</th>
        <th>Start-Time</th>
        <th>End-Time</th>
        <th>Event</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="events.length === 0">
        <td colspan="5">Ups! There are no events in your list!</td>
      </tr>
      <tr v-for="event in events" :key="event.id">
        <td>{{ event.id }}</td>
        <td>{{ formatDate(event.start)}}</td>
        <td>{{ event.start.toLocaleTimeString().slice(0, -3) }}</td>
        <td>{{ event.finish.toLocaleTimeString().slice(0, -3) }}</td>
        <td>{{ event.event }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Events',
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
    loadEvents () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/termin/'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(event => {
          event.start = new Date(event.start)
          event.finish = new Date(event.finish)
          this.events.push(event)
        }))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    this.loadEvents()
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #eeeeee;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #e8e8e8;
}
</style>
