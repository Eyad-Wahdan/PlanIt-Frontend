<template>
  <body id="background">
  <div id="elements">
    <img class="picture" alt="PlanIt logo" src="../assets/logo.png">
    <h2 id="heading">Welcome to PlanIt</h2>
    <button id="myButton" onclick="location.href='../calendar'" tag="button" class="btn btn-primary">Let's Get Started</button>
  </div>
  <div id="stars">
    <div id="stars2">
      <div id="stars3">
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.picture{
  height: 400px;
  width: 600px;
  padding-left: 150px;
}

#background {
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(#090042, #011c93, #090042);
}

#elements {
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  text-align: center;
  font-family: Georgia;
  font-weight: 300;
}

#heading {
  font-size: 60px;
  padding-bottom: 15px;
  padding-top: 5px;
  color: #fff;
}

.btn {
  height: 46px;
  width: 200px;
  background-color: royalblue;
  border-color: royalblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}

</style>
