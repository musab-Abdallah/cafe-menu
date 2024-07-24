/* eslint-disable */
<template>
  <router-view></router-view>
  <!-- <headerpage  /> -->
</template>
<script>
import headerPage from './components/headerPage.vue';
export default {
  components: { 
    headerPage 
  },
  name: "App",
};
</script>
<style>
body {
  /* background-color: #eee; */
  padding: 0;
  margin: 0;
}
.nav {
    background-color: #eee;
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
}
.nav a {
    float: left;
    color: rgb(176, 35, 68);
    padding: 14px 14px;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    margin-right: 5px;
    margin-bottom: 10px;
}
.nav a:hover {
    background-color: #ddd;
    color: #6299b0;
}
</style>
