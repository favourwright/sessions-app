<template>
<div class="grid grid-cols-3 gap-4 rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
  <div class="bg-white/10 rounded-2xl">
    <h4>Days</h4>
    <h2 v-text="days"></h2>
  </div>
  <div class="bg-white/10 rounded-2xl">
    <h4>Hours</h4>
    <h2 v-text="hours"></h2>
  </div>
  <div class="bg-white/10 rounded-2xl">
    <h4>Minutes</h4>
    <h2 v-text="minutes"></h2>
  </div>
</div>
</template>

<script>
export default {
  props:{
    days:{
      type:Number,
      default:()=>0
    },
    hours:{
      type:Number,
      default:()=>0
    },
    minutes:{
      type:Number,
      default:()=>0
    }
  }
}
</script>

<style>

</style>
