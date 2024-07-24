/* eslint-disable */
<template>
    <headerpage />
    <h1>this is update page</h1>
    <form action="" class="Add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="Address" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" name="Contact" placeholder="Enter Contact" v-model="restaurant.contact">
    </form>
   <div class="center"><button type="button" class="center-button" @click="updaterestaurant">update Restaurant</button></div>
</template>
<script>
import headerPage from './headerPage.vue';
import axios from "axios";
export default {
    name:'UpdatePage',
    components: {
     headerPage
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
    methods: {
       async updaterestaurant() {
      const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
       name:this.restaurant.name,
       address:this.restaurant.address,
       contact:this.restaurant.contact
   });
   if (result.status == 200) {
    this.$router.push({ name: "homepage" });
   }
     }
},
   async mounted() {
         let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
       let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
       this.restaurant = result.data
    }
}
</script>``