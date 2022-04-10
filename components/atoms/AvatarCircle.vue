<template>
  <div
    :style="`width:${size}; height:${size}`"
    class="rounded-full overflow-hidden">
    <img
      class="object-cover h-full w-full"
      :src="require(`~/assets/images/avatars/${avatar}`)"
      :alt="`${name}`">
  </div>
</template>

<script>
export default {
  props:{
    avatar:{
      String,
      default:()=>'andikan-1.svg'
    },
    name:{
      String,
      default:()=>'John Doe'
    },
    size:{
      String,
      default:()=>'40px'
    }
  }
}
</script>

<style>

</style>
