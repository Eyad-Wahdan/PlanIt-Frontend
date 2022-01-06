<style>
.home{
  font-family: Arial;
  padding-top: 40px;
}
.body{
  height: 100vh;
  width: 100%;
  color: #fff;
  background: linear-gradient(#2493ef, #2c4ac5, #150386);
}

.writing{
  font-size: 50px;
  padding-bottom: 15px;
  padding-top: 10px;
  font-family: "Times New Roman";
}

</style>

<template>
  <body class="body">
  <div class="home">
    <img alt="PlanIt logo" src="../assets/logo.png">
    <h1 class="writing">Welcome to PlanIt!</h1>
    <router-link to='../views/calendar' tag="button" class="btn btn-primary">Let's Get Started</router-link>
  </div>
  </body>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style scoped>

</style>
