<template>
  <nav class="primary fixed justify-between lg:justify-center bottom-1 md:bottom-0
    left-2 md:left-0 right-2 md:right-0 z-10
    py-3 px-8 lg:px-0 lg:pt-4 2xl:pt-[44px] lg:pb-8 2xl:pb-[86px]
    flex gap-2 2xl:gap-[60px] text-white
    bg-dark-gray/30 md:bg-dark-gray rounded-[32px] md:rounded-none
    backdrop-blur-xl backdrop-brightness-100 md:backdrop-filter-none">
    <button-1 class="active">
      <iconly name="setting" size="28" />
      <span class="text-[7px] lg:text-sm">Sessions</span>
    </button-1>
    <button-1>
      <iconly name="setting" size="28" />
      <span class="text-[7px] lg:text-sm">Directoriy</span>
    </button-1>
    <button-1>
      <iconly name="setting" size="28" />
      <span class="text-[7px] lg:text-sm">
        <span class="hidden lg:block">Submit a Question</span>
        <span class="lg:hidden">Question?</span>
      </span>
    </button-1>
    <button-1>
      <iconly name="setting" size="28" />
      <span class="text-[7px] lg:text-sm">
        <span class="hidden lg:block">Meet D Team</span>
        <span class="lg:hidden">D Team</span>
        <span></span>
      </span>
    </button-1>
    <button-1>
      <iconly name="setting" type="broken" size="28" />
      <span class="text-[7px] lg:text-sm">Archives</span>
    </button-1>
  </nav>
</template>

<script>
import Button1 from '@/components/atoms/Button1'
export default {
  components: { Button1 },
  methods:{
  }
}
</script>

<style scoped>
button{
  @apply md:bg-white/10 flex-col lg:flex-row
  text-white;
}
button:nth-of-type(1).active{
  @apply text-light-blue md:text-current md:bg-light-blue/50 after:bg-light-blue;
}
button:nth-of-type(2).active{
  @apply text-pink md:text-current md:bg-pink/50 after:bg-pink;
}
button:nth-of-type(3).active{
  @apply text-yellow md:text-current md:bg-yellow/50 after:bg-yellow;
}
button:nth-of-type(4).active{
  @apply text-success md:text-current md:bg-success/50 after:bg-success;
}
button:nth-of-type(5).active{
  @apply text-orange md:text-current md:bg-orange/50 after:bg-orange;
}
button.active{
  @apply after:absolute after:top-[110%] lg:after:top-[120%]
  after:w-8 lg:after:w-[40px] after:h-1 lg:after:h-[14px]
  after:rounded-full
}
</style>
