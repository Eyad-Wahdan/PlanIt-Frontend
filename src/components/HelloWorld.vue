<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to='../views/calendar' tag="button" class="btn btn-primary">Let's Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
