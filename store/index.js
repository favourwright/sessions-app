export const state = () => ({
  modal:{
    open_modal_list:[]
  }
})

export const mutations = {
  addToModalList(state, payload){
    state.modal.open_modal_list.push(payload)
  },
  removeFromModalList(state){
    state.modal.open_modal_list.pop()
  }
}
export const actions = {
  HandleOpenModal({commit}, payload){
    EV_GLOBAL.$emit('open-modal', payload)
  },
  addToModalList({commit}, payload){
    commit('addToModalList', payload)
  },
  removeFromModalList({commit}){
    commit('removeFromModalList')
  }
}
