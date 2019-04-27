<template>
    <div>
        vuex {{ $store.state.count }} {{ count }}
        <!--<button @click="increment" >增加</button>-->
        <!--<button @click="decrement" >减少</button>-->
        <button @click="$store.dispatch('increment')" >增加</button>
        <button @click="$store.dispatch('decrement')" >减少</button>

    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import store from "../store";


    export default {
        // methods:mapActions([
        //     'increment',
        //     'decrement'
        // ])
        // methods:{
        //     increment(){
        //         store.dispatch('increment')
        //     },
        //     decrement(){
        //         store.dispatch('decrement')
        //     }
        // }
        computed:{
            count(){
                return this.$store.state.count
            }
        }
    }


</script>
