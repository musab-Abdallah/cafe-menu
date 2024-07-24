/* eslint-disable */
<template>
  <div>
    <!-- <img class="logo" src="../assets/project-4.jpg" /> -->
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/AddPage">Add Restaurant</router-link>
        <!-- <routerLink to="/UpdatePage">Update Restaurant</routerLink> -->
        <a @click="logout" href="#">Logout</a>
    </div>
    <h1>login</h1>
    <div class="register">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
    </div>
    <div class="center">
      <button @click="login" class="center-button">login</button>
    </div>
    <p class="center">
      <router-link to="/up" class="center-button">SignUp</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "loginpage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "homepage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "homepage" });
    }
  },
};
</script>
<style>
.register input {
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  display: block;
  border: 1px solid skyblue;
  border-radius: 10px;
  outline: none;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
}
p {
  margin: auto;
  text-align: center;
  margin-top: 5px;
  text-decoration: none;
}
</style>
