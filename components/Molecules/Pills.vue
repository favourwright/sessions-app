<template>
  <div class="flex gap-5">
    <pill v-for="n in 3" :key="n" />
  </div>
</template>

<script>
import Pill from '@/components/atoms/Pill'
export default {
  components: { Pill },
}
</script>

<style>

</style>
