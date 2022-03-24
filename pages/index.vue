<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      class="absolute h-full flex items-center
      transition duration-1000 ease-in-out left-0"
      :class="{slide:slide}"
      :style="`--left: ${slide_amount}px;`">
      <div ref="landing_1"
        class="px-[5%] lg:px-[192px] h-full flex flex-col justify-center
        float-left">
        <h1 class="text-[42px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
        <Search class="w-full lg:w-[640px] mb-[33px]" name="Search for event..." />
        <h2 class="text-[26px] lg:text-[40px] text-gray-70 leading-[140%] font-semibold">
          Here are some tailored events we made, <span class="text-white">just for you.</span>
        </h2>
      </div>
      <div
        ref="landing_2"
        class="min-w-[500px] h-full bg-white/10 float-left"
        @click="slide=!slide"></div>
    </div>
  </div>
</template>

<style scoped>
.slide{
  animation: mymove 3s 1 forwards;
}
@keyframes mymove {
  100% {transform: translateX(var(--left));}
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
    slide_amount:0,
  }),
  methods:{
    getSize(){
      return this.$refs.landing_1.clientWidth
    },
    iO(){
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }

      let observer = new IntersectionObserver(function(entries){
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let elem = entry.target;
            console.log(elem);
          }
        });
      }, options);

      let target = this.$refs.landing_2;
      observer.observe(target);
    }
  },
  mounted(){
    this.slide_amount = -this.getSize()

    setTimeout(() => {
      this.iO()
    }, 1000);
  }
}
</script>
