<template>
<div
  class="w-full rounded-3xl lg:rounded-[48px]
  p-6 lg:p-12 mb-3 lg:mb-6 bg-white/10 transition duration-300
  flex flex-col-reverse lg:flex-row desktop-md:flex-col-reverse gap-4">
  <div class="lg:w-1/2 desktop-md:w-full">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h1
          class="text-4xl lg:text-5xl font-black mb-1 text-light-blue">
          Sessions
        </h1>
        <span class="text-white text-2xl font-medium">
          Jan 17th, 2022
        </span>
        <span class="text-gray-80 text-base font-medium">
          Friday, 10:10pm WAT
        </span>
      </div>
      <div class="text-white flex items-center gap-2">
        <span class="w-[10px] h-[10px] bg-red-1 rounded-full"></span>
        Live
      </div>
    </div>
    <p class="font-normal text-base text-white leading-[170%]">
      We exist to help people get answers to questions they've not found.
      Either that they cannot ask them or they do not know to frame them,
      or the answers are not framed well...
      <NuxtLink class="text-light-blue" to="#">Read more</NuxtLink>
    </p>

    <div class="people">
    </div>

    <div class="grid grid-cols-2 lg:flex mt-10 gap-3">
      <button-2 class="active bg-light-blue" text="Join Now" />
      <button-2 text="View Event" />
    </div>
  </div>

  <div
    class="lg:w-1/2 desktop-md:w-full relative min-h-[200px]
    rounded-xl lg:rounded-[20px] 2xl:rounded-[32px] overflow-hidden">
    <img
      class="absolute top-0 left-0 w-full h-full object-cover"
      src="~/assets/images/playground.png"
      alt="">
  </div>
</div>
</template>

<script>
import Button2 from '@/components/atoms/Button2'
export default {
  components: {
    Button2,
  },
}
</script>

<style>

</style>
