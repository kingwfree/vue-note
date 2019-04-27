import Vue from 'vue'
import VueRouter from "vue-router"

import app from "./App";

import pageA from "./pages/a";
import pageB from "./pages/b";

Vue.use(VueRouter)

const routes = [
    {
        path:'/pagea',
        component:pageA
    },
    {
        path:'/pageb',
        component:pageB
    },
    {
        path:'/',
        component:app
    }
]

const router = new VueRouter({
    routes
})

export default router
