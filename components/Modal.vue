<template>
  <div
    v-show="show"
    class="fixed top-0 bottom-0 left-0 right-0 z-20
    flex items-center justify-center"
    :ref="modal_ref">
    <div
      @click.self="CloseModal"
      class="absolute top-0 bottom-0 left-0 right-0 bg-black/70">
      <div
        @click="increment"
        ref="content"
        class="rounded-[48px] bg-dark-gray-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    modal_ref: {
      type: String,
      default: 'modal'
    }
  },
  data:()=>({
    show: true
  }),
  methods:{
    CloseModal(){
      this.show = false
    },
  },
  mounted() {
    console.log(this.$refs);
  }
}
</script>

<style>

</style>
