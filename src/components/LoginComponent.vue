<template>
    <img src="../assets/restoFood.png" />
    <h1>Login Page</h1>
    <div class="Login">

        <input type="email" v-model="email" placeholder="Enter your Email " />
        <input type="password" v-model="password" placeholder="Enter your password " />

        <button class="button" type="button">Login</button>
    </div> <br />
    <router-link to="SignUp">SignUp</router-link>
</template>

<script>
export default {
    name: "LoginComponent"
}
</script>