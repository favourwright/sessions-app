<template>
  <vue-scroll :ops='ops'>
  <div class="flex gap-2 lg:gap-5">
    <pill
      v-for="(pill,n) in pills"
      :key="n"
      :bg_class="pill.bg_class"
      :text="pill.text" />
  </div>
  </vue-scroll>
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
  data:()=>({
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
  components: { Pill },
}
</script>

<style>

</style>
