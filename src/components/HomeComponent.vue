<template>
    <HeaderComponent /> <br /><br /><br />
    <h3 class="h3">Welcome {{ name }} to Home Page</h3> <br /><br /><br /><br /><br />
    <table border="2">
        <tr>
            <td>ID</td>
            <td>Restaurent Name</td>
            <td>Location</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurents" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.RestaurentName }}</td>
            <td>{{ item.Location }}</td>
            <td>{{ item.Contact }}</td>
            <td><router-link :to="'/UpdateResto/' + item.id">Update</router-link></td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: 'HomeComponent',
    components: { HeaderComponent },

    data() {
        return {
            name: "",
            restaurents: [],
        };
    },

    async mounted() {
        let user = localStorage.getItem("user-info");

        if (!user) {
            this.$router.push({ name: "SignUp" });
            return;
        }

        user = JSON.parse(user);
        this.name = user.name;

        let result = await axios.get("http://localhost:3000/restaurent");
        this.restaurents = result.data;
    }
}
</script>

<style>
.h3 {
    float: left;
}

td {
    height: 40px;
    width: 150px;
}
</style>
