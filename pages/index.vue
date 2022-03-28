<template>
  <section class="flex relative h-full overflow-hidden">
    <div
      ref="landing"
      class="landing absolute h-full flex items-center ease-in-out left-0"
      :class="{slide}"
      :style="`--left: ${slide_amount}px;`">
      <vue-scroll :ops="ops" class="min-w-[88%] lg:min-w-[unset]">
        <div ref="landing_1"
          class="landing_1 pl-[5%] lg:px-[120px] 2xl:px-[192px] pt-[50px] lg:pt-[77px]
          h-full transition-all duration-300"
          :style="`--width: ${landing_1}px;`">
          <h1 class="text-[42px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
          <Search class="w-full lg:w-[640px] lg:max-w-full mb-[33px]" name="Search for event..." />
          <h2 class="text-[26px] lg:text-[40px] text-gray-70 leading-[140%] font-semibold">
            Here are some tailored events we made, <span class="text-white">just for you.</span>
          </h2>
          <div class="mt-8 pb-[50px]">
            <cards />
          </div>
        </div>
      </vue-scroll>
      <div
        ref="landing_2"
        class="landing_2 h-full flex transition-all duration-300"
        :style="`--width: ${landing_2}px;`">
          <div class="flex-grow-0 flex items-center text-white">
            <div
              @click="slide=!slide"
              class="transform transition duration-500 ease-in-out cursor-pointer"
              :class="{rotate:landing_2_is_visible, bob:!landing_2_is_visible}">
              <iconly class="ico" name="arrow-left2" size="48" />
            </div>
          </div>
          <div class="flex-grow">
            <vue-scroll :ops='ops'>
              <div class="pl-0 lg:pl-8 pr-4 lg:pr-8 h-full block">
                <div class="w-full mb-3 lg:mb-6 rounded-3xl lg:rounded-[48px] p-8 lg:p-12 bg-white/10">
                  hey
                </div>
                <div class="grid grid-cols-2 gap-3 lg:gap-6">
                  <div class="rounded-2xl lg:rounded-3xl bg-white/10 p-8">
                    yosh
                  </div>
                  <div class="rounded-2xl lg:rounded-3xl bg-white/10 p-8">
                    tata
                  </div>
                </div>
              </div>
            </vue-scroll>
          </div>
      </div>

    </div>
  </section>
</template>

<script>
import Layout from "@/layouts/default"
import Pills from '@/components/molecules/Pills'
import Cards from '@/components/molecules/Cards'
export default {
  components: {
    Layout,
    Pills,
    Cards,
  },
  name: "IndexPage",
  data(){
    return {
      ops: {
        vuescroll: {
          detectResize: true,
        },
        scrollPanel: {
          // scrollingX: false,
        },
        bar: {
          opacity: 0.1,
        }
      },
      slide: false,
      slide_amount:0,
      landing_1:null,
      landing_2:null,
      landing_2_is_visible:false,
    }
  },
  methods:{
    async setLandingWidth(){
      this.landing_1 = window.innerWidth
      this.landing_2 = window.innerWidth
      this.slide_amount = - await this.landing_1

      const slide =  setTimeout(() => {
        this.landing_1 = this.$device.isMobileOrTablet
          ? document.querySelector('.landing_1').clientWidth
          : document.querySelector('.landing_1').clientWidth-300
        this.slide_amount = -this.landing_1
        clearTimeout(slide)
      }, 0);
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
    DoSom(bool){
      this.landing_2_is_visible=bool
    }
  },
  mounted(){
    this.setLandingWidth()
    document.addEventListener('resize',()=>this.setLandingWidth())
    this.iO()
  }
}
</script>

<style scoped>
.slide{
  animation: mymove 1s 1 forwards;
}
.rotate{
  @apply -rotate-180;
}
.landing_1{
  min-width:var(--width,100%);
  max-width:var(--width,100%);
}
@media (max-width: 767px) {
  .landing_1{
    min-width:100%;
    max-width:100%;
  }
}
.landing_2{
  min-width:var(--width,100%);
  max-width:var(--width,100%);
}
@media (max-width: 767px) {
  .landing_2{
    min-width:100%;
    max-width:100%;
  }
}
@keyframes mymove {
  100% {transform: translateX(var(--left));}
}

.bob{
  animation: bob 1s infinite;
}
@keyframes bob {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}
</style>
