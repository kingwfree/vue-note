const state = {
    money:1
}

const mutations={
    add(state,param){
        state.money++;
        window.console.log(param)
    },
    reduce(state){
        state.money--
    }
}

const actions = {
    add:({commit},param)=>{
        commit('add',param)
    },
    reduce:({commit})=>{
        commit('reduce')
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
