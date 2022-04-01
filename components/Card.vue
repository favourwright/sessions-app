<template>
  <div class="bg-gray-90/10 max-w-[144px] rounded-[32px] p-6">
    <div class="rounded-full h-[96px] w-[96px] bg-gray-50-1/20 flex items-center justify-center">
      <img :src="require(`~/assets/images/icons/${icon}`)" />
    </div>
    <pill class="mt-[30px]" :type='type' :text='text' />
  </div>
</template>

<script>
import Pill from '@/components/atoms/Pill.vue'
export default {
  components: { Pill },
  props:{
    text:{
      type:String,
      default:()=>'UX Design'
    },
    type:{
      type:String,
      default:()=>'tags'
    },
    icon:{
      type:String,
      default:()=>'git.svg'
    }
  },
}
</script>

<style>

</style>
