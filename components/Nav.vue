<template>
  <nav class="primary pt-4 2xl:pt-[44px] pb-8 2xl:pb-[86px] flex gap-2
    2xl:gap-[60px] justify-center text-white">
    <Button class="active">
      <iconly name="setting" size="26" />
      <span class="text-[7px] lg:text-sm">Sessions</span>
    </Button>
    <Button>
      <iconly name="setting" size="26" />
      <span class="text-[7px] lg:text-sm">Directoriy</span>
    </Button>
    <Button>
      <iconly name="setting" size="26" />
      <span class="text-[7px] lg:text-sm">Submit a Question</span>
    </Button>
    <Button>
      <iconly name="setting" size="26" />
      <span class="text-[7px] lg:text-sm">Meet D Team</span>
    </Button>
    <Button>
      <iconly name="setting" type="broken" size="26" />
      <span class="text-[7px] lg:text-sm">Archives</span>
    </Button>
  </nav>
</template>

<script>
export default {
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
  @apply after:absolute after:top-[120%]
  after:w-[14px] lg:after:w-[40px] after:h-[14px] after:rounded-full
}
</style>
