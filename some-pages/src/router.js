import Vue from "vue";
import VueRouter from 'vue-router'

import app from "./App";

import pageA from "./components/a";
import pageB from "./components/b";
import pageC from "./components/c";


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:app
    },
    {
        path:'/pagea',
        component:pageA
    },
    {
        path:'/pageb',
        component:pageB
    },
    {
        path:'/pagec',
        component:pageC
    }
]

const router = new VueRouter({routes})

export default router
