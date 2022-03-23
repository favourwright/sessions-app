<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      class="absolute flex items-center h-full
      transition duration-1000 ease-in-out left-0"
      :class="{slide:slide}"
      style="--left: -500px;">
      <div class="px-[5%] lg:px-[192px]">
        <h1 class="text-[42px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
        <Search class="w-full lg:w-[640px] mb-[33px]" name="Search for event..." />
        <h2 class="text-[26px] lg:text-[40px] text-gray-70 leading-[140%] font-semibold">
          Here are some tailored events we made, <span class="text-white">just for you.</span>
        </h2>
      </div>
      <div class="min-w-[500px] h-full border-l-2 border-white/10" @click="Handle"></div>
    </div>
  </div>
</template>

<style scoped>
.slide{
  animation: mymove 5s 1;
}
@keyframes mymove {
  50% {left: var(--left);}
}
</style>

<script>
import Layout from "@/layouts/default"
export default {
  components: {
    Layout,
  },
  name: "IndexPage",
  data: () => ({
    slide: false,
  }),
  methods: {
    Handle() {
      this.slide=true
    },
  },
}
</script>
