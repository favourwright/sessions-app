<template>
  <section
    class="flex w-full h-screenbg-dark-gray
    transition duration-300 overflow-hidden">
    <div
      :class="{slide}"
      :style="`--left: ${slide_amount}px;`"
      class="landing block flex-grow
      transform transition duration-300">
      <div
        ref="landing_1"
        class="landing_1 h-full float-left w-full">
        <vue-scroll :ops='ops'>
          <div
            class="px-[5%] lg:pr-[30%] lg:pl-[120px] 2xl:pl-[192px]
            pt-[90px] 2xl:pt-[126px] pb-[100px] lg:pb-[100px] 2xl:pb-[200px]">
            <h1 class="text-[52px] lg:text-[64px] mb-[33px] font-black text-light-blue">Sessions</h1>
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
        <div
          :class="{'max-w-[10px] md:max-w-none':slide}"
          class="flex-grow-0 flex items-center text-white">
          <div
            @click="HandleSlide"
            class="transform transition duration-500 ease-in-out cursor-pointer z-10"
            :class="{rotate:landing_2_is_visible}">
            <iconly
              :class="{ico:true,bob:true}"
              name="arrow-left2"
              size="48" />
          </div>
        </div>
        <div class="flex-grow">
          <vue-scroll :ops='ops'>
            <div class="pt-[90px] 2xl:pt-[126px] lg:pb-[100px] 2xl:pb-[200px]">
              <div class="flex flex-col md:flex-row gap-12 2xl:gap-8 px-4 pl-2 lg:px-12">
                <div class="w-full md:w-2/3">
                  <session-main />

                  <div class="grid grid-cols-1 lg:grid-cols-2 desktop-md:grid-cols-1 gap-3 lg:gap-6">
                    <sessions date="2022-12-29 23:59:00" />
                    <sessions-main-title />
                  </div>
                </div>

                <div class="md:w-1/3 mb-24 md:mb-0">
                  <div class="h-full flex flex-col">
                    <sessions-upcoming class="flex-grow" />
                  </div>
                </div>
              </div>
            </div>
          </vue-scroll>
        </div>
      </div>
    </div>
    <upcoming-modal />
    <join-now-modal />
  </section>
</template>

<script>
import Cards from '@/components/molecules/Cards'
import Sessions from '@/components/molecules/Sessions'
import SessionMain from '@/components/SessionMainEvent'
import SessionsMainTitle from '@/components/SessionsMainEventTitle'
import SessionsUpcoming from '@/components/molecules/SessionsUpcomingEvent'
import Button2 from '@/components/atoms/Button2'
import UpcomingModal from '@/components/UpcomingModal'
import JoinNowModal from '@/components/JoinNowModal'
export default {
  components: {
    Cards,
    Sessions,
    SessionMain,
    SessionsMainTitle,
    SessionsUpcoming,
    Button2,
    UpcomingModal,
    JoinNowModal,
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
        this.show_landing_2_partly=this.slide==false?true:false
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
