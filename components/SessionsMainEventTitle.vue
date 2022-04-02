<template>
<div class="rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
  <span class="font-medium text-gray-80">Title:</span>
  <h2 class="font-medium text-2xl text-white">Getting started with Figma; A designer's First steps</h2>
  <pills class="mt-[14px]" :pills="pills" />
</div>
</template>

<script>
import Pills from '@/components/molecules/Pills'
export default {
  components: { Pills },
  props:{
  },
  data:()=>({
    pills:[
      {
        text:'UX Design',
        bg_class:'bg-light-blue/10 text-light-blue'
      },
      {
        text:'Frontend',
        bg_class:'bg-light-blue/10 text-light-blue'
      },
      {
        text:'VueJs',
        bg_class:'bg-light-blue/10 text-light-blue'
      }
    ]
  })
}
</script>

<style>

</style>
