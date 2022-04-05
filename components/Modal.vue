<template>
  <div
    v-show="show"
    class="fixed top-0 bottom-0 left-0 right-0 z-20
    flex items-center justify-center"
    :ref="modal_ref">
    <div
      class="absolute z-10 p-10 rounded-full bg-dark-gray-3">
      <slot></slot>
    </div>
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></div>
  </div>
</template>

<script>
export default {
  props: {
    modal_ref: {
      type: String,
      default: 'modal'
    }
  },
  data: () => ({
    show: false
  }),
  mounted() {
    console.log(this.$refs);
  }
}
</script>

<style>

</style>
