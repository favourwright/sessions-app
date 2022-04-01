<template>
  <nav class="primary flex justify-center fixed bottom-1 md:bottom-0
    left-2 md:left-0 right-2 md:right-0 z-10
    py-3 px-8 lg:px-0 lg:pt-4 2xl:pt-[44px] lg:pb-8 2xl:pb-[86px]
    text-white bg-dark-gray/50 md:bg-dark-gray rounded-[32px] md:rounded-none
    backdrop-blur-xl md:backdrop-filter-none">
    <div
      class="flex flex-grow md:flex-grow-0 gap-2 2xl:gap-[60px]
      justify-between lg:justify-center relative">
      <button-1
        v-for="(nav,i) in nav_list"
        :key="i"
        :class="{active:nav.active}">
        <iconly :name="nav.icon" :type="nav.active?'bulk':'light'" size="30" />
        <span class="text-[10px] lg:text-sm">
          <span class="hidden lg:block">{{nav.name}}</span>
          <span class="lg:hidden">{{nav.name_mob?nav.name_mob:nav.name}}</span>
        </span>
      </button-1>
      <div class="railing"><div></div></div>
    </div>
  </nav>
</template>

<script>
import Button1 from '@/components/atoms/Button1'
export default {
  components: { Button1 },
  data:()=>({
    nav_list:[
      {
        name:'Sessions',
        icon:'activity',
        active:true
      },
      {
        name:'Directory',
        icon:'folder',
        active:false
      },
      {
        name:'Submit a Question',
        name_mob:'Question?',
        icon:'send',
        active:false
      },
      {
        name:'Meet D Team',
        name_mob:'D Team',
        icon:'3user',
        active:false
      },
      {
        name:'Archives',
        icon:'bookmark',
        active:false
      }
    ]
  }),
  methods:{
  }
}
</script>

<style scoped>
button{
  @apply md:bg-white/10 flex-col lg:flex-row
  text-white;
}
button:nth-of-type(1).active{
  @apply text-light-blue md:text-current md:bg-light-blue/50;
}
button:nth-of-type(1).active ~ .railing div{
  @apply ml-[calc((164px+8px)*0)] 2xl:ml-[calc((164px+60px)*0)]
  after:bg-light-blue
}
button:nth-of-type(2).active{
  @apply text-pink md:text-current md:bg-pink/50
}
button:nth-of-type(2).active ~ .railing div{
  @apply ml-[calc((164px+8px)*1)] 2xl:ml-[calc((164px+60px)*1)]
  after:bg-pink
}
button:nth-of-type(3).active{
  @apply text-yellow md:text-current md:bg-yellow/50
}
button:nth-of-type(3).active ~ .railing div{
  @apply ml-[calc((164px+8px)*2)] 2xl:ml-[calc((164px+60px)*2)]
  after:bg-yellow
}
button:nth-of-type(4).active{
  @apply text-success md:text-current md:bg-success/50;
}
button:nth-of-type(4).active ~ .railing div{
  @apply ml-[calc((164px+8px)*3)] 2xl:ml-[calc((164px+60px)*3)]
  after:bg-success
}
button:nth-of-type(5).active{
  @apply text-orange md:text-current md:bg-orange/50;
}
button:nth-of-type(5).active ~ .railing div{
  @apply ml-[calc((164px+8px)*4)] 2xl:ml-[calc((164px+60px)*4)]
  after:bg-orange
}
.railing{
  @apply absolute top-[120%] left-0 w-full lg:h-[14px] overflow-hidden
  rounded-full
}
.railing div{
  @apply absolute left-0 top-0 w-[164px] h-full  flex justify-center
  after:absolute after:h-full lg:after:w-[40px] after:rounded-full
  transition duration-500 ease-in-out
}
@media (min-width: 767px) {
  nav.primary button > *:nth-child(1){
    display:none;
  }
}
</style>
