<template>
  <button
    class="font-semibold text-base
    flex items-center justify-center
    min-w-[148px] h-[53px] rounded-full
    bg-white/[12%] text-white
    ring-[0.3px] ring-white ring-inset"
    v-text="text">
  </button>
</template>

<script>
export default {
  props:{
    text:{
      String,
      default:()=>'Click Me'
    }
  }
}
</script>

<style>
.active{
  @apply ring-0 text-dark-gray
}
</style>
