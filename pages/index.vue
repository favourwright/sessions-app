<template>
  <section
    class="flex w-full h-screen
    pt-[74px] 2xl:pt-[126px] pb-[82px] md:pb-[54px] lg:pb-[88px] 2xl:pb-[170px]
    bg-dark-gray transition duration-300 overflow-hidden">
    <div
      :class="{slide}"
      :style="`--left: ${slide_amount}px;`"
      class="landing block flex-grow
      transform transition duration-300">
      <div ref="landing_1" class="landing_1 h-full float-left w-full">
        <vue-scroll :ops='ops'>
          <div
            class="pr-[48px] lg:pr-[30%] pl-[5%] lg:pl-[120px] 2xl:pl-[192px] pt-[50px] lg:pt-[77px]">
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
      </div>
      <div
        ref="landing_2"
        :class="{show_landing_2_partly}"
        class="landing_2 flex h-full float-left w-full
        transform transition duration-300">
        <div class="flex-grow-0 flex items-center text-white">
          <div
            @click="HandleSlide"
            class="transform transition duration-500 ease-in-out cursor-pointer"
            :class="{rotate:landing_2_is_visible}">
            <iconly :class="{ico:true,bob:true}" name="arrow-left2" size="48" />
          </div>
        </div>
        <div class="flex-grow">
          <vue-scroll :ops='ops'>
            <div class="pl-0 lg:pl-8 pr-4 lg:pr-8 h-full">
              <div
                class="w-full rounded-3xl lg:rounded-[48px]
                p-6 lg:p-12 mb-3 lg:mb-6 bg-white/10
                flex flex-col-reverse lg:flex-row">
                <div class="w-full lg:w-1/2">
                  heyyy
                </div>
                <div
                  class="w-full lg:w-1/2 h-[200px] lg:h-[355px]
                  rounded-xl lg:rounded-[32px] overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="~/assets/images/playground.png"
                    alt="">
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
                <div class="rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
                  yosh
                </div>
                <div class="rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
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
import Pills from '@/components/molecules/Pills'
import Cards from '@/components/molecules/Cards'
export default {
  components: {
    Pills,
    Cards,
  },
  data:()=>({
    slide:false,
    slide_amount:0,
    show_landing_2_partly:false,
    landing_2_is_visible:false,
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
  }),
  methods:{
    Setup(){
      const landing = document.querySelector('.landing')
      const landing_1 = document.querySelector('.landing_1')
      const landing_2 = document.querySelector('.landing_2')
      landing.style.minWidth = `${window.innerWidth*2}px`
      landing_1.style.width = '50%'
      landing_2.style.width = '50%'
      this.slide_amount = -landing_1.clientWidth
      // wait a bit before showing landing 2 partly
      setTimeout(() => {
        this.show_landing_2_partly=true
      }, 1000);
    },
    HandleSlide(){
      this.show_landing_2_partly=false
      this.slide=!this.slide
      // show partly each time landing 1 is visible
      this.show_landing_2_partly=this.slide==false?true:false
    },
    iO(){
      // intersection observer
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
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
    this.Setup()
    this.iO()
    window.addEventListener('resize', this.Setup)
  },
  unmounted(){
    window.removeEventListener('resize', this.Setup)
  }
}
</script>

<style>
.slide{
  transform: translateX(var(--left));
}
.show_landing_2_partly{
  @apply translate-x-[-48px] lg:translate-x-[-30%]
}
.rotate{
  @apply -rotate-180;
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
