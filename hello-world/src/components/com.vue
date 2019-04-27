<template>
    <div>
        <slot name="a"></slot>
        {{age}}
        {{name}}
        <button @click="$emit('patch',15)" >发送到父组件</button>
        <slot name="b"></slot>
    </div>
</template>

<script>
    export default {
        props:['age'],
        data(){
            return {
                name:"Com"
            }
        }
    }
</script>
