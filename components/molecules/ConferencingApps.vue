<template>
  <div class="grid gap-x-[30px] gap-y-6">
    <conferencing-app
      v-for="(brand,i) in brands"
      :key="i"
      :brand="brand" />
  </div>
</template>

<script>
import ConferencingApp from '@/components/ConferencingApp'
export default {
  components: { ConferencingApp },
  data:()=>({
    brands:[
      {
        name: 'meet',
        color: 'bg-brands-meet/20',
        is_active: true,
      },
      {
        name: 'zoom',
        color: 'bg-brands-zoom/20',
      },
    ]
  })
}
</script>

<style>

</style>
