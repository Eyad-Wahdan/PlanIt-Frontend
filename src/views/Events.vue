<template>
  <h1 style="font-family:'Times New Roman',serif;">Have a look at your Events!</h1>
  <div>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Date</th>
        <th>Time</th>
        <th>Event</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="events.length === 0">
        <td colspan="4">Ups! There are no events in your list!</td>
      </tr>
      <tr v-for="event in events" :key="event.id">
        <td>{{event.id}}</td>
        <td>{{event.date}}</td>
        <td>{{event.time}}</td>
        <td>{{event.event}}</td>
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
    loadEvents () {
      console.log('Ausgeführt')
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/termin/'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(event => {
          this.events.push(event)
          console.log('Done!')
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
  border: 1px solid #dddddd;
  text-align: -moz-center;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
