<template>
  <div
    class="rounded-3xl p-4 bg-white/10 min-h-[164px]
    grid grid-cols-5 gap-4">
    <div class="col-span-3 h-full flex gap-2 flex-col justify-between">
      <h3 class="text-gray-80 font-semibold text-[22px]">
        Finding your niche as a creative...
      </h3>
      <div class="flex justify-between flex-col md:flex-row md:items-end">
        <div>
          <span class="text-white font-medium text-[20px]">Jan 7th, 2022</span>
          <span class="text-gray-80 font-medium text-[16px]">Friday, 10:00pm WAT</span>
        </div>
        <button class="self-start md:self-auto">RSVP</button>
      </div>
    </div>
    <div class="col-span-2 bg-white/10 rounded-2xl relative overflow-hidden">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="~/assets/images/playground.png"
        alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
