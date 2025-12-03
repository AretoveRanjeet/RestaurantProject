<template>
    <img src="../assets/restoFood.png" alt="Restaurant Food Logo" />
    <h1>Login Page</h1>
    <div class="Login">

        <input type="email" v-model="email" placeholder="Enter your Email " />
        <input type="password" v-model="password" placeholder="Enter your password " />
        <button class="button" type="button" v-on:click="login">Login</button>
    </div> <br />

    <router-link to="/SignUp">SignUp</router-link>
</template>

<script>
import axios from 'axios';

export default {
    name: "LoginComponent",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    
    methods: {
        async login() {

            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: "HomeComponent" })
            } else {
                alert("wrong Username or Password-")
            }
        },
    },
     mounted() {
        // This will ALWAYS clear when login page loads
        this.email = "";
        this.password = "";
    },


}
</script>