export const state = () => ({
  modal:{
    show_wrapper:true,
    show_main:true,
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
  }
}
