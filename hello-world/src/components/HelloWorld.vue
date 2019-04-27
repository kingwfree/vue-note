<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-n="4">

    </div>
      <div :class="{'test1':t1}" ></div>
      <div :class="{'test2':t2}" ></div>
      <button @click="cli(1,$event)">click</button>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data(){
        return {
          t1:true,
          t2:false
        }
    },
    methods:{
        cli(a,e){
          console.log(a,e)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
