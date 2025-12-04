<template>
    <HeaderComponent /> <br /><br /><br />
    <h3 class="h3">Welcome to Update Restaurent page</h3><br /><br /><br /><br /><br />
    <div class="SignUp">
        <input type="text" required v-model="RestaurentName" placeholder="Enter Restaurant  name " />
        <input type="text" required v-model="Location" placeholder="Enter Restaurant Location" />
        <input type="number" required v-model="Contact" placeholder="Enter Contact number " />

        <button class="button" type="button" v-on:click="updateRestaurent">Update Restaurent</button>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: 'UpdateResto',
    components: {
        HeaderComponent
    },
    data() {
        return {
            RestaurentName: "",
            Location: "",
            Contact: ""
        }
    },
    methods: {
        async updateRestaurent() {
            const name = this.RestaurentName.trim();
            const location = this.Location.trim();
            const contact = this.Contact.toString().trim();

            if (!name || !location || !contact) {
                alert("Please fill all fields before submitting!");
                return;
            }

            if (contact.length !== 10) {
                alert("Contact number must be 10 digits");
                return;
            }
            if (contact[0] !== "6" &&
                contact[0] !== "7" &&
                contact[0] !== "8" &&
                contact[0] !== "9"
            ) {
                alert("Contact number must Start from 6,7,8,9");
                return;
            }
            const result = await axios.put("http://localhost:3000/restaurent/" + this.$route.params.id, {
                RestaurentName: this.RestaurentName,
                Location: this.Location,
                Contact: this.Contact
            });
            if (result.status === 200) {
                this.$router.push({ name: "HomeComponent" })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
        let result = await axios.get("http://localhost:3000/restaurent/" + this.$route.params.id);
        console.warn(result.data);

        this.RestaurentName = result.data.RestaurentName;
        this.Location = result.data.Location;
        this.Contact = result.data.Contact;
    }

}
</script>

<style>
.h3 {
    float: left;
}
</style>