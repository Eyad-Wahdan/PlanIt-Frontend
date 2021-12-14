<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img alt="PlanIt logo" src="../assets/logo.png" height= "35" width= "35">
      <a class="navbar-brand" href="#">PlanIt</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class = "nav-link" to="/">Home</router-link>
          <router-link class = "nav-link" to ="calendar">Calendar</router-link>
          <router-link class = "nav-link" to="events">Events</router-link>
          <router-link class = "nav-link" to="about">About</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
