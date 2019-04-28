const state = {
    sum:1
}

const mutations={
    add(state){
        state.sum++
    },
    reduce(state){
        state.sum--
    }
}

const actions = {
    add:({commit})=>{
        commit('add')
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
