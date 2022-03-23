<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      class="absolute flex items-center h-full
      transition duration-1000 ease-in-out"
      :style="{ left: `${container_left}px` }">
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

<script>
import Layout from "@/layouts/default"
export default {
  components: {
    Layout,
  },
  name: "IndexPage",
  data: () => ({
    container_left: 1,
  }),
  methods: {
    async Handle() {
      // let interval = 0
      // let px = 500
      // let vm = this
      // await (async ()=>{
      //   let test = setInterval(() => {
      //     interval++
      //     vm.container_left = -(interval * (1 + interval / px))
      //     interval == 450 ? clearInterval(test) : null
      //   }, 0)
      //   return true
      // })()
      // await (async ()=>{
      //   let test = setInterval(() => {
      //     interval++
      //     vm.container_left = -(interval * (1 + interval / px))
      //     interval == 500 ? clearInterval(test) : null
      //   }, 8)
      //   return true
      // })()
    },
  },
}
</script>
