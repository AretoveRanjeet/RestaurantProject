<template>
    <h3>Welcome on Home page</h3>
</template>

<script>
export default{
    name:'HomeComponent',
     mounted(){
            let user = localStorage.getItem("user-info");
            if(!user){
            this.$router.push({name:"SignUp"})
            }
        }
   
}
</script>