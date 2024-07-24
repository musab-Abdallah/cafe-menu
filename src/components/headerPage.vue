/* eslint-disable */
<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/AddPage">Add Restaurant</router-link>
        <!-- <routerLink to="/UpdatePage">Update Restaurant</routerLink> -->
        <a @click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name:'headerPage',
    methods: {
         logout() {
            localStorage.clear()
            this.$router.push({name:'login'})
         }
    }
}
</script>
<style>

</style>