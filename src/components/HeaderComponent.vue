<template>
    <div class="nav">
        <router-link  to="/">Home</router-link>
        <router-link to="/AddResto">Add Restaurent</router-link>
        <a v-on:click="logout">Log Out</a>

    </div>

</template>

<script>


export default {
    name: "HeaderComponent",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "LoginComponent" })
        }
    }
}
</script>
<style>
.nav a {
    color: white;
    background: gray;
    padding: 10px;
    float: left;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
}

.nav a:hover {
    color: black;
    background-color: rgb(245, 203, 179);
}


</style>