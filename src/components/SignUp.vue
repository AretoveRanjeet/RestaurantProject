<template>
    <img src="../assets/restoFood.png" />
    <form class="container" @submit.prevent="signUp">
        <div class="SignUp">
            <input type="text" v-model="name" placeholder="Enter your name " />
            <input type="email" v-model="email" placeholder="Enter your Email " />
            <input type="password" v-model="password" placeholder="Enter your password " />

            <button class="button" type="button" v-on:click="signUp">Sign Up</button>
        </div>
    </form>
    <p>Alredy have account</p> <router-link to="LoginComponent">Login</router-link>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: ""

        }
    },
    methods: {
        async signUp() {
            console.warn("signUp", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password

            });
            console.warn(result);

            if (result.status == 201) {
                alert("Sign up done");
                this.$router.push({ name: "HomeComponent" })
            }

            localStorage.setItem("user-info", JSON.stringify(result));

        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "HomeComponent" })
        }
    }
}
</script>

<style></style>