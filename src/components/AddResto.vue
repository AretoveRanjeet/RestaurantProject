<template>
    <HeaderComponent /> <br /><br /><br />
    <h3 class="h3">Welcome to Add Restaurent page</h3><br /><br /><br /><br /><br /><br />
    <h2>Add Restaurant</h2>
    <AddRestoForm/><br /><br /><br />
    
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import AddRestoForm from './AddRestoForm.vue';
export default {
    name: 'AddResto',
    components: {
        HeaderComponent,
        AddRestoForm
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>

<style>
.h3 {
    float: left;
}
</style>