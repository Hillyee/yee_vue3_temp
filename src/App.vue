<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="a yee vue template"/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>