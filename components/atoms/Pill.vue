<template>
  <div
    :class="bg_class"
    class="rounded-full p-2 font-semibold whitespace-nowrap
    text-[14px] leading-[10%] flex justify-center items-center h-[32px]"
    :style="type==='calender'?{'height':'40px'}:{'height':'32px'}"
    v-text="`${(type==='tags'?'#':'')+text}`">
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:()=>'UX Design'
    },
    bg_class:{
      type:String,
      default:()=>'bg-white/10 text-white'
    },
    type:{
      type:String,
      default:()=>'tags'
    },
  },
}
</script>

<style>

</style>
