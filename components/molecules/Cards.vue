<template>
<div class="flex justify-start gap-3 lg:gap-[66px] flex-wrap lg:flex-nowrap">
  <card
    v-for="(card,i) in cards"
    :key="i"
    :text='card.text'
    :type='card.type' />
</div>
</template>

<script>
import Card from '@/components/Card'
export default {
  components: { Card },
  props:{
    cards:{
      type:Array,
      default:()=>[
        {
          type:'tags',
          text:'UX Design',
        },
        {
          type:'tags',
          text:'UI Design',
        },
        {
          type:'tags',
          text:'Frontend',
        },
      ]
    }
  }
}
</script>
