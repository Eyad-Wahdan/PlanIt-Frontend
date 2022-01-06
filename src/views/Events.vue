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
        <th></th>
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
          <button type="button" class="btn btn-outline-danger">Delete</button>
        </td>
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

tbody td:not(.deleteButton) {
  border-bottom: 1px solid #dddddd;
}

/*tr:nth-child(even) {*/
/*  background-color: #e8e8e8;*/
/*}*/

tbody td:last-of-type {
  background-color: white;
  text-align: center;
  width: 100px;
}

tr:hover td:not(.deleteButton) {background-color: #c7c6c6;}

.noItem td {
  text-align: center;
}
</style>
