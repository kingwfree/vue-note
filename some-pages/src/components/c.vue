<template>
    <div>
        page C {{$store.state.sum.sum}}
        <button @click="add" >增加</button>
        <button @click="reduce" >减少</button>
    </div>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        methods:mapActions('sum',[
            'add',
            'reduce'
        ])
    }



</script>
