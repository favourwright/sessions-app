<template>
  <button
    class="font-semibold text-base
    flex items-center justify-center
    px-4 lg:min-w-[148px] h-[53px]
    rounded-full text-white
    ring-[0.3px] ring-white ring-inset"
    v-text="text"
    :class="bg">
  </button>
</template>

<script>
export default {
  props:{
    text:{
      String,
      default:()=>'Click Me'
    },
    bg:{
      String,
      default:()=>'bg-white/[12%]'
    }
  }
}
</script>

<style>
.active{
  @apply ring-0 text-dark-gray
}
</style>
