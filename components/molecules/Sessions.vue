<template>
<div class="grid grid-cols-3 gap-4 rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
  <div class="bg-white/10 rounded-2xl p-4">
    <h4>Days</h4>
    <h2 class="text-5xl text-white" v-text="days"></h2>
  </div>
  <div class="bg-white/10 rounded-2xl p-4">
    <h4>Hours</h4>
    <h2 class="text-5xl text-white" v-text="hours"></h2>
  </div>
  <div class="bg-white/10 rounded-2xl p-4">
    <h4>Minutes</h4>
    <h2 class="text-5xl text-white" v-text="minutes"></h2>
  </div>
</div>
</template>

<script>
export default {
  props:{
    days:{
      type:String,
      default:()=>'00'
    },
    hours:{
      type:String,
      default:()=>'00'
    },
    minutes:{
      type:String,
      default:()=>'00'
    }
  }
}
</script>

<style>

</style>
