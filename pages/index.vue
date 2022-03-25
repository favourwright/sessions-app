<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      class="landing absolute h-full flex items-center ease-in-out left-0"
      :class="{slide}"
      :style="`--left: ${slide_amount}px;`">
      <vue-scroll :ops="{ scrollPanel: { scrollingY: true } }">
        <div ref="landing_1"
          class="px-[5%] lg:px-[192px] pt-[50px] lg:pt-[77px] h-full
          flex flex-col justify-center float-left">
          <h1 class="text-[42px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
          <Search class="w-full lg:w-[640px] mb-[33px]" name="Search for event..." />
          <h2 class="text-[26px] lg:text-[40px] text-gray-70 leading-[140%] font-semibold">
            Here are some tailored events we made, <span class="text-white">just for you.</span>
          </h2>
          <div>
            <pills />
          </div>
        </div>
      </vue-scroll>
      <div
        ref="landing_2"
        class="min-w-[500px] h-full float-left flex">
          <div class="flex-grow-0 flex items-center text-white">
            <div
              @click="slide=!slide"
              class="transform transition duration-500 ease-in-out cursor-pointer"
              :class="{rotate:landing_2_is_visible}">
              <iconly class="ico" name="arrow-left2" size="48" />
            </div>
          </div>
          <div class="flex-grow bg-white/10">
            <h1>Hi from ere</h1>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.slide{
  animation: mymove 2s 1 forwards;
}
.rotate{
  @apply -rotate-180;
}
@keyframes mymove {
  100% {transform: translateX(var(--left));}
}
</style>

<script>
import Layout from "@/layouts/default"
import Pills from '@/components/Molecules/Pills'
export default {
  components: {
    Layout,
    Pills,
  },
  name: "IndexPage",
  data(){
    return {
      slide: false,
      slide_amount:0,
      landing_2_is_visible:false,
    }
  },
  methods:{
    getSize(){
      return this.$refs.landing_1.clientWidth
    },
    iO(){
      // intersection observer
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
      const ev = this.DoSom
      let observer = new IntersectionObserver(function(entries){
        entries.forEach(entry => {
          let elem = entry.target;
          entry.isIntersecting? ev(true):ev(false)
        });
      }, options);

      let target = this.$refs.landing_2;
      observer.observe(target);
    },
    DoSom(e){
      this.landing_2_is_visible=e
    }
  },
  mounted(){
    this.slide_amount = -this.getSize()
    this.iO()
  }
}
</script>
