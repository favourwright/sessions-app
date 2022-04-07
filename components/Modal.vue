<template>
  <div
    v-if="show_wrapper"
    class="fixed top-0 bottom-0 left-0 right-0 z-20
    flex"
    :ref="modal_ref">
    <div
      @click.self="CloseModal"
      :class="[show_main ? 'opacity-100' : 'opacity-0']"
      class="bg-black/70 w-full h-full
      flex justify-center items-center
      transition-all duration-100">
      <div
        :class="[show_main ? 'scale-100' : 'scale-150']"
        class="rounded-3xl lg:rounded-[32px] 2xl:rounded-[48px]
        bg-dark-gray-3 p-4 lg:p-10 2xl:p-[64px]
        transform transition-all duration-100 max-w-[84%] max-h-[80%]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    modal_ref: {
      type: String,
      default: 'modal'
    }
  },
  data:()=>({
    show_wrapper: false,
    show_main: false,
  }),
  computed: {
    ...mapState(['modal']),
  },
  methods:{
    ...mapActions(['addToModalList', 'removeFromModalList']),
    CloseModal(){
      // only hide modal if its the current open modal
      if(this.modal_ref === this.modal.open_modal_list[this.modal.open_modal_list.length-1]){
        this.removeFromModalList()
        this.show_main=false
        // wait for main to fadeout before hiding
        const timeout = setTimeout(()=>{
          this.show_wrapper = false
          clearTimeout(timeout)
        },100)
      }
    },
    OpenModal(payload){
      if(this.modal_ref === payload){
        // if payload is the last item on list don't push
        if(this.modal.open_modal_list[this.modal.open_modal_list.length-1] !== payload){
          this.addToModalList(payload)
        }
        this.show_wrapper = true
        const timeout = setTimeout(()=>{
          this.show_main=true
          clearTimeout(timeout)
        })
      }
    },
  },
  mounted(){
    EV_GLOBAL.$on("open-modal", this.OpenModal)
  }
}
</script>
