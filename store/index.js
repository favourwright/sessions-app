export const state = () => ({
  modal:{
    current_modal_name:null,
  }
})

export const mutations = {
  setCurrentModal(state, modal_name){
    state.modal.current_modal_name = modal_name
  },
}
export const actions = {
  OpenModal({commit}, payload){
    commit('setCurrentModal', payload)
    EV_GLOBAL.$emit('open-modal') // second param is optional payload
  }
}
