<template>
  <div class="flex flex-col 2xl:justify-between gap-3 lg:gap-6 mt-2 lg:mt-4">
    <session-upcoming
      v-for="(session,n) in sessions"
      :key="n"
      :title="session.title"
      :date="session.date"
      :time="session.time"
      :image="session.image"
    />
  </div>
</template>

<script>
import SessionUpcoming from '@/components/SessionUpcomingEvent'
export default {
  components:{ SessionUpcoming },
  data:()=>({
    sessions:[
      {
        title:'Finding your niche as a creative...',
        date:'2022-04-29',
        time:'Friday, 10:00pm WAT',
        image:'barthelemy-de-mazenod-f_mGDtPvMmk-unsplash.jpg',
      },
      {
        title:'Finding your niche as a creative...',
        date:'2022-04-29',
        time:'Friday, 10:00pm WAT',
        image:'hector-j-rivas-1FxMET2U5dU-unsplash.jpg',
      },
      {
        title:'Finding your niche as a creative...',
        date:'2022-04-29',
        time:'Friday, 10:00pm WAT',
        image:'jj-ying-7JX0-bfiuxQ-unsplash.jpg',
      },
    ]
  })
}
</script>

<style>

</style>
