<template>
  <nav class="primary pt-3 lg:pt-4 2xl:pt-[44px] pb-3 lg:pb-8 2xl:pb-[86px] flex gap-2
    2xl:gap-[60px] justify-center text-white">
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
  @apply bg-white/10 flex-col lg:flex-row;
}
button:nth-of-type(1).active{
  @apply bg-light-blue/50 after:bg-light-blue;
}
button:nth-of-type(2).active{
  @apply bg-pink/50 after:bg-pink;
}
button:nth-of-type(3).active{
  @apply bg-yellow/50 after:bg-yellow;
}
button:nth-of-type(4).active{
  @apply bg-success/50 after:bg-success;
}
button:nth-of-type(5).active{
  @apply bg-orange/50 after:bg-orange;
}
button.active{
  @apply after:absolute after:bottom-0
  overflow-hidden lg:overflow-visible
  lg:after:bottom-[unset] lg:after:top-[120%]
  after:w-8 lg:after:w-[40px] after:h-2 lg:after:h-[14px]
  after:rounded-tl-full after:rounded-tr-full lg:after:rounded-full
}
</style>
