<template>
 <router-view :key="$route.fullPath"></router-view>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.SignUp input,
.Login input {
  width: 300px;
  height: 25px;
  padding: 7px;
  display: block;
  margin-bottom: 25px;
  border: 2px solid skyblue;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.SignUp button,
.Login button {
  height: 40px;
  width: 120px;
  padding: 5px;
  border: 2px solid skyblue;
  color: white;
  background: skyblue;
  text-align: center;
}
</style>
