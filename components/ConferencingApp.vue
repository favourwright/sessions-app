<template>
  <div
    :class="[brand.is_active?brand.color:'bg-white/10']"
    class="2xl:h-[128px] 2xl:w-[256px] rounded-3xl
    flex items-center justify-center px-5 py-10">
    <img
      class="object-contain"
      :class="{'opacity-20':!brand.is_active}"
      :src="require(`~/assets/images/brands/${brand.name}${brand.is_active?'':'-gray'}.svg`)"
      :alt="`${brand.name} logo`">
  </div>
</template>

<script>
export default {
  props:{
    brand:{
      type: Object,
      default: ()=>({
        name: 'meet',
        color: 'bg-brands-meet/20',
        is_active: true,
      })
    },
  },
}
</script>

<style>

</style>
