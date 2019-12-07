<template>
 <div id="secure">
 <h1>Secure Area</h1>
 <p>
 This is a secure area
 <button type="button" v-on:click="logout()">Logout</button>
 </p>
 </div>
</template>
<script>
 export default {
 name: 'Secure',
 data() {
 return {};
 },
 methods: {
 logout() {
 this.$store.dispatch('logout')
 this.$router.push({ name: "login" });
 }
 }
 }
</script>
<style scoped>
 #secure {
 background-color: #FFFFFF;
 border: 1px solid #CCCCCC;
 padding: 20px;
 margin-top: 10px;
 }
</style>