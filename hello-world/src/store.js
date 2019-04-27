import Vue from "vue";
import Vuex from "vuex";

// 将状态从根组件“注入”到每一个子组件中
Vue.use(Vuex)

const state = {
    count : 1
}

const mutations = {
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

const actions={
    increment:(context)=>{
        context.commit('increment');
        window.console.log(context)
    },
    decrement:({commit})=>{commit('decrement')}
}

export default new Vuex.Store({state,mutations,actions})
