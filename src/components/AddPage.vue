/* eslint-disable */
<template>
    <headerpage/>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/AddPage">Add Restaurant</router-link>
        <!-- <routerLink to="/UpdatePage">Update Restaurant</routerLink> -->
        <a @click="logout" href="#">Logout</a>
    </div>
    <form action="" class="Add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="Address" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" name="Contact" placeholder="Enter Contact" v-model="restaurant.contact">
    </form>
   <div class="center"><button type="button" class="center-button" @click="addrestaurant">Add New Restaurant</button></div>
</template>
<script>
import headerPage from './headerPage.vue';
import axios from "axios";
export default {
    name:'AddPage',
    components: {
      headerPage,
    },
    data() {
      return {
        restaurant: {
            name: '',
            address:'',
            contact: ''
        }
      }
    },
    methods : {
    async  addrestaurant() {
   const result = await axios.post("http://localhost:3000/restaurant", {
    name:this.restaurant.name,
    address:this.restaurant.address,
    contact:this.restaurant.contact
   });
   if (result.status == 201) {
    this.$router.push({ name: "homepage" });
   }
        }
    },
    mounted() {
         let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
    }
}
</script>
<style >
.Add input {
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
  margin-top: 40px;
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