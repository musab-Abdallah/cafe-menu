/* eslint-disable */
<template>
  <div>
    <!-- <img class="logo" src="../assets/project-4.jpg" /> -->
    <h1>SignUp</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
    </div>
    <div class="center">
      <button @click="signup" class="center-button">SignUp</button>
    </div>
    <p class="center">
      <router-link to="/login" class="center-button">login</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
img {
  width: 100px;
  border-radius: 50%;
}
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
</style>
