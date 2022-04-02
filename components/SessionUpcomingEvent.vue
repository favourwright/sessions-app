<template>
  <div
    class="rounded-3xl p-4 bg-white/10 min-h-[164px]
    grid grid-cols-5 gap-4">
    <div class="col-span-3 h-full flex gap-1 flex-col justify-between">
      <h3 class="text-gray-80 font-semibold text-lg lg:text-[22px] leading-snug">
        {{title}}
      </h3>
      <div class="flex justify-between items-end flex-col lg:flex-row">
        <div class="leading-none">
          <span class="text-white font-medium text-base lg:text-[20px]">{{date}}</span>
          <span class="text-gray-80 font-medium text-sm lg:text-[16px]">{{time}}</span>
        </div>
        <button
          class="px-[24px] py-[10px] rounded-full bg-light-blue text-dark-gray
          text-[10px] font-semibold self-auto w-full lg:w-auto mt-1">
          RSVP
        </button>
      </div>
    </div>
    <div class="col-span-2 bg-white/10 rounded-2xl relative overflow-hidden">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        :src="require(`~/assets/images/${image}`)"
        alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    image:{
      String,
      default:()=>'playground.png'
    },
    title:{
      String,
      default:()=>'Finding your niche as a creative...'
    },
    date:{
      String,
      default:()=>'Jan 7th, 2022'
    },
    time:{
      String,
      default:()=>'Friday, 10:00pm WAT'
    }
  }

}
</script>

<style>

</style>
