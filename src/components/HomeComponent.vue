<template>
    <HeaderComponent/> <br/><br/><br/>
    <h3 class="h3">Welcome to Home Component</h3>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {

    components:{
        HeaderComponent
    },
    name: 'HomeComponent',
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }

}
</script>

<style>
.h3{
    float: left;
}
</style>