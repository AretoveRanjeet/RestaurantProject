import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import LoginComponent from "./components/LoginComponent.vue";
import { createRouter, createWebHistory } from 'vue-router'

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
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})
export default router