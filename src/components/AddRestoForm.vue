<template>
    <div class="SignUp">
        <input type="text" required v-model="RestaurentName" placeholder="Enter Restaurant  name " />
        <input type="text" required v-model="Location" placeholder="Enter Restaurant Location" />
        <input type="number" required v-model="Contact" placeholder="Enter Contact number " />

        <button class="button" type="button" v-on:click="addResto">Add Restaurent</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "AddRestoForm",
    data() {
        return {
            RestaurentName: "",
            Location: "",
            Contact: ""
        }
    },
    methods: {
        async addResto() {
            const name = this.RestaurentName.trim();
            const location = this.Location.trim();
            const contact = this.Contact.toString().trim();


            if (!name || !location || !contact) {
                alert("Please fill all fields before submitting!");
                return;
            }
            let existing = await axios.get(`http://localhost:3000/restaurent?RestaurentName=${this.RestaurentName}`);
            if (existing.data.length > 0) {
                alert("Restaurant already exists! Cannot add again.");
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
            let result = await axios.post("http://localhost:3000/restaurent", {
                name: this.RestaurentName,
                Location: this.Location,
                Contact: this.Contact
            });

            console.warn(result);
            alert("Restaurent added successfully")

        }
    }
}
</script>