<template>
<div class="nav">
    <a href="home"> Home</a>
<a href="home"> Add Restaurent</a>
<a href="home"> Update Restaurent</a>
<a href="home"> Log Out</a>

</div>

</template>

<script>
export default{
    name:"HeaderComponent"
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
}
.nav a:hover{
    color: black;
    background-color: wheat;
}
</style>