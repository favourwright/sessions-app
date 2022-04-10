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
        bg-dark-gray-3 p-4 lg:p-10 2xl:p-[64px] flex
        transform transition-all duration-100
        max-w-[86%] lg:max-w-[74%] max-h-[84%] lg:max-h-[80%]">
        <div class="flex">
          <vue-scroll :ops="ops">
            <slot></slot>
          </vue-scroll>
        </div>
      </div>
      <close-btn
        class="fixed top-6 right-6 text-white invisible lg:visible"
        @click.native="CloseModal" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CloseBtn from '@/components/atoms/CloseBtn'
export default {
  props: {
    modal_ref: {
      type: String,
      default: 'modal'
    }
  },
  components: {
    CloseBtn
  },
  data:()=>({
    show_wrapper: false,
    show_main: false,
    ops: {
      vuescroll: {
        detectResize: true,
      },
      scrollPanel: {
        // scrollingX: false,
      },
      bar: {
        opacity: 0.1,
      }
    },
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
