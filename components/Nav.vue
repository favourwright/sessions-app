<template>
  <nav class="pt-4 xl:pt-[44px] pb-8 xl:pb-[86px] flex gap-2
    xl:gap-[60px] justify-center text-white">
    <Button class="active">
      <span class="hidden lg:block">Sessions</span>
      <iconly class="lg:hidden" name="setting" size="26" />
    </Button>
    <Button>
      <span class="hidden lg:block">Directoriy</span>
      <iconly class="lg:hidden" name="setting" size="26" />
    </Button>
    <Button>
      <span class="hidden lg:block">Submit a Question</span>
      <iconly class="lg:hidden" name="setting" size="26" />
    </Button>
    <Button>
      <span class="hidden lg:block">Meet D Team</span>
      <iconly class="lg:hidden" name="setting" size="26" />
    </Button>
    <Button>
      <span class="hidden lg:block">Archives</span>
      <iconly class="lg:hidden" name="setting" type="broken" size="26" />
    </Button>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
button:nth-of-type(1).active{
  @apply bg-light-blue/50 after:bg-light-blue;
}
button.active{
  @apply after:absolute after:top-[120%]
  after:w-[14px] lg:after:w-[40px] after:h-[14px] after:rounded-full
}
</style>
