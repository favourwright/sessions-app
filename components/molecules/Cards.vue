<template>
<div class="flex justify-start gap-3 lg:gap-6 2xl:gap-[66px] flex-wrap lg:flex-nowrap">
  <card
    v-for="(card,i) in cards"
    :key="i"
    :text='card.text'
    :icon='card.icon'
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
          icon:'git.svg'
        },
        {
          type:'tags',
          text:'UI Design',
          icon:'diamond.svg'
        },
        {
          type:'tags',
          text:'Frontend',
          icon:'js.svg'
        },
      ]
    }
  }
}
</script>
