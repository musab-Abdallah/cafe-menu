/* eslint-disable */
<template>
   <header-page />
  <div>
    <table border="1">
      <tr>
        <td>iD</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td> {{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/UpdatePage/'+ item.id">Update</router-link>
        <button @click="deleteres(item.id)">Delete</button>
      </td>
      </tr>
    </table>
  </div>
</template>
<script>
import headerPage from './headerPage.vue';
import axios from "axios";
export default {
  name: "homepage",
  components:{
   headerPage
  },
   data() {
    return {
      name: '',
      restaurant: []
    }
   },
   methods: {
   async deleteres(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if(result.status == 200) {
        this.loaddata()
      }
    },
    async loaddata() {
      let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    this.restaurant = result.data
    }
   },
   async mounted() {
     this.loaddata()
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
body {
  margin: 0;
  padding: 0;
}
table {
  margin: auto;
  margin-top: 20px;
}
</style>
