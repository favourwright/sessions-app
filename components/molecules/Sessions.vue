<template>
<div class="grid grid-cols-3 gap-4 rounded-2xl lg:rounded-3xl bg-white/10 p-6 lg:p-8">
  <div class="bg-white/10 rounded-2xl p-4">
    <h4 class="text-gray-80 text-xs lg:text-base">Days</h4>
    <h2 class="text-3xl lg:text-5xl text-white">{{ days | two_digits }}</h2>
  </div>
  <div class="bg-white/10 rounded-2xl p-4">
    <h4 class="text-gray-80 text-xs lg:text-base">Hours</h4>
    <h2 class="text-3xl lg:text-5xl text-white">{{ hours | two_digits }}</h2>
  </div>
  <div class="bg-white/10 rounded-2xl p-4">
    <h4 class="text-gray-80 text-xs lg:text-base">Minutes</h4>
    <h2
      :class="{'text-error':days==0&&hours==0&&minutes<10}"
      class="text-3xl lg:text-5xl text-white">{{ minutes | two_digits }}</h2>
  </div>
</div>
</template>

<script>
export default {
  props:{
    date: {
      type: String
    },
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },

  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
    }
  },

  filters:{
    two_digits: function (value){
      if (value < 0) {
        return '00'
      }
      if (value.toString().length <= 1) {
        return `0${value}`
      }
      return value
    }
  },

  mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
    },1000)
  },
}
</script>

<style>

</style>
