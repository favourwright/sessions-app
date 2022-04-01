<template>
  <div class="flex gap-2 lg:gap-5">
    <pill
      v-for="(pill,n) in pills"
      :key="n"
      :bg_class="pill.bg_class"
      :text="pill.text" />
  </div>
</template>

<script>
import Pill from '@/components/atoms/Pill'
export default {
  props:{
    pills:{
      type:Array,
      default:()=>[
        {
          text:'UX Design',
          bg_class:'bg-white/10 text-white'
        },
        {
          text:'UI Design',
          bg_class:'bg-white/10 text-white'
        },
        {
          text:'UI Design',
          bg_class:'bg-white/10 text-white'
        }
      ]
    }
  },
  components: { Pill },
}
</script>

<style>

</style>
