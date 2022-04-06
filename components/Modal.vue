<template>
  <div
    v-if="modal.show_wrapper"
    class="fixed top-0 bottom-0 left-0 right-0 z-20
    flex"
    :ref="modal_ref">
    <div
      @click.self="CloseModal"
      :class="[modal.show_main ? 'opacity-100' : 'opacity-0']"
      class="bg-black/70 w-full h-full
      flex justify-center items-center
      transition-all duration-100">
      <div
        :class="[modal.show_main ? 'scale-100' : 'scale-150']"
        class="rounded-3xl lg:rounded-[32px] 2xl:rounded-[48px]
        bg-dark-gray-3 p-4 lg:p-10 2xl:p-[64px]
        transform transition-all duration-100">
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
  computed:{
    ...mapState(['modal'])
  },
  methods:{
    ...mapActions(['CloseModal']),
  },
  mounted() {
    console.log(this.$refs[this.modal_ref]);
  }
}
</script>
