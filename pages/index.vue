<template>
  <div class="flex relative h-full overflow-hidden">
    <div
      ref="landing"
      class="landing absolute h-full flex items-center ease-in-out left-0"
      :class="{slide}"
      :style="`--left: ${slide_amount}px;`">

      <div ref="landing_1"
        class="landing_1 px-[5%] lg:px-[192px] pt-[50px] lg:pt-[77px] h-full"
        :style="`--width: ${landing_1}px;`">
        <h1 class="text-[42px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
        <Search class="w-full lg:w-[640px] lg:max-w-full mb-[33px]" name="Search for event..." />
        <h2 class="text-[26px] lg:text-[40px] text-gray-70 leading-[140%] font-semibold">
          Here are some tailored events we made, <span class="text-white">just for you.</span>
        </h2>
        <div></div>
      </div>

      <div
        ref="landing_2"
        class="landing_2 h-full flex"
        :style="`--width: ${landing_2}px;`">
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
.landing_1{
  min-width:var(--width,100%);
  max-width:var(--width,100%);
}
.landing_2{
  min-width:var(--width,100%);
  max-width:var(--width,100%);
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
      landing_1:null,
      landing_2:null,
      landing_2_is_visible:false,
    }
  },
  methods:{
    async setLandingWidth(){
      // this.$refs.landing.style.width = `${(window.innerWidth)*2}px`
      this.landing_1 = window.innerWidth-300
      this.landing_2 = window.innerWidth
      this.slide_amount = - await this.landing_1
    },
    iO(){
      // intersection observer
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
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
    this.setLandingWidth()
    document.addEventListener('resize',()=>this.setLandingWidth())
    this.iO()
  }
}
</script>
