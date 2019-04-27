<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Com :age="age" @patch="msg">
            <h1 slot="a" >需要使用slot a</h1>
            <h1 slot="b" >需要使用slot b</h1>
        </Com>
        <Vuex />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Com from "./components/com";
import Vuex from  './components/vuex'

import './components/customDirectives'


export default {
    name: 'app',
    components: {
        HelloWorld,
        Com,
        Vuex

    },
    data(){
        return {
            age:18
        }
    },
    methods:{
        msg(a){
            this.age++;
            window.console.log(a)
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
