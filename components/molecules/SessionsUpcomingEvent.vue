<template>
  <div class="flex flex-col justify-between gap-3 lg:gap-6 mt-2 lg:mt-4">
    <session-upcoming v-for="n in 3" :key="n" />
  </div>
</template>

<script>
import SessionUpcoming from '@/components/SessionUpcomingEvent'
export default {
  components:{ SessionUpcoming },

}
</script>

<style>

</style>
