export const state = () => ({
  modal:{
    show_wrapper:false,
    show_main:false,
  }
})

export const mutations = {
  toggle_wrapper(state){
    state.modal.show_wrapper = !state.modal.show_wrapper
  },
  toggle_main(state){
    state.modal.show_main = !state.modal.show_main
  }
}
export const actions = {
  CloseModal({commit}){
    commit('toggle_main')
    // wait for main to fadeout before hiding
    const timeout = setTimeout(()=>{
      commit('toggle_wrapper')
      clearTimeout(timeout)
    },100)
  },
  OpenModal({commit}){
    commit('toggle_wrapper')
    const timeout = setTimeout(()=>{
      commit('toggle_main')
      clearTimeout(timeout)
    })
  }
}
