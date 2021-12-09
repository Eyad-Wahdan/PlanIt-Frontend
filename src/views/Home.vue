<template>
  <div class="home">
    <img alt="PlanIt logo" src="../assets/logo.png">
    <HelloWorld style="font-family:'Times New Roman',serif;" msg="Welcome to PlanIt!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
