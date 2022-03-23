<template>
  <div class="h-[70px] rounded-full relative shadow-md text-white">
    <div class="flex items-center h-full absolute px-[31px]">
      <iconly class="mb-0.5" name="search" size="20" />
    </div>
    <input
      class="h-full w-full bg-white/10 rounded-full pr-[31px]
      pl-[62px] text-[16px] font-normal text-white border-0
      placeholder:italic placeholder-white
      focus:outline-none focus:border-white
      focus:ring-white focus:ring-2"
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
