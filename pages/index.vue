<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      class="absolute flex h-full transition duration-1000 ease-in-out"
      :style="{ left: `${container_left}px` }">
      <div class="min-w-[1000px]">
        <h1>Sessions</h1>
        <Search name="Search for event..." />
      </div>
      <div class="min-w-[500px] bg-green-400 border-l-8" @click="Handle"></div>
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
