<template>
  <div
    class="rounded-full bg-white/10 text-white p-2 font-semibold
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
    type:{
      type:String,
      default:()=>'tags'
    },
  },
}
</script>

<style>

</style>
