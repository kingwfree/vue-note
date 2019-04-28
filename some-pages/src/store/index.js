import Vue from "vue";
import Vuex from "vuex";
import money from "./module/a";
import count from "./module/b";
import sum from "./module/c";

Vue.use(Vuex)

//模块的命名空间
export default new Vuex.Store({
    modules:{
        money,
        count,
        sum
    }
})
