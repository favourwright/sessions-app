<template>
  <div class="flex flex-col gap-4">
    <h2
      class="attendee-count
      font-semibold text-gray-80 bg-white/10
      rounded-full px-4 py-1 text-sm self-start">
      Attendees Count
      <strong class="text-white text-lg ml-2">134</strong>
    </h2>
    <attendee
      v-for="(attendee,n) in attendees"
      :key="n"
      :attendee="attendee" />
  </div>
</template>

<script>
import Attendee from '@/components/Attendee'
export default {
  components: { Attendee },
  props:{
    attendees:{
      type:Array,
      default:()=>([
        {
          name: 'Adeyinka Johnson',
          avatar: 'elvis-1.svg',
          time: 'Just now',
          action: 'joined',
        },
        {
          name: 'Adeyinka Johnson',
          avatar: 'elvis-2.svg',
          time: 'Just now',
          action: 'joined',
        },
        {
          name: 'Adeyinka Johnson',
          avatar: 'elvis-3.svg',
          time: 'Just now',
          action: 'joined',
        },
        {
          name: 'Adeyinka Johnson',
          avatar: 'elvis-4.svg',
          time: 'Just now',
          action: 'joined',
        },
      ])
    }
  }
}
</script>

<style>

</style>
