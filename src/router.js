import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import LoginComponent from "./components/LoginComponent.vue";
import { createRouter, createWebHistory } from 'vue-router'
import AddResto from "./components/AddResto.vue";
import UpdateResto from "./components/UpdateResto.vue";

const routes = [
    {
        name: "HomeComponent",
        component: HomeComponent,
        path: "/"
    },
    {
        name: "Signup",
        component: SignUp,
        path: "/signUp"
    },
    {
        name: "LoginComponent",
        component: LoginComponent,
        path: "/LoginComponent"
    },
    {
        name: "AddResto",
        component: AddResto,
        path: "/Addresto"
    },
    {
        name: "UpdateResto",
        component: UpdateResto,
        path: "/UpdateResto/:id"
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})
export default router