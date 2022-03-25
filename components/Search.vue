<template>
  <div class="h-[54px] lg:h-[70px] w-full rounded-full relative text-white">
    <div class="flex items-center h-full absolute px-[24px] lg:px-[31px]">
      <iconly class="mb-0.5" name="search" size="20" />
    </div>
    <input
      class="h-full w-full bg-white/10 rounded-full
      pr-[24px] lg:pr-[31px] pl-[48px] lg:pl-[62px]
      text-[16px] font-normal text-white border-0
      placeholder:italic placeholder-white
      focus:outline-none focus:border-white
      focus:ring-white focus:ring-2
      transition duration-300"
      :placeholder="name" type="search" name="" id="">
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type: String,
      default:()=>'Search'
    }
  },
}
</script>
