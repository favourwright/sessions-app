<template>
<div class="block h-[202px] relative">
  <div class="absolute top-0 left-0 w-full h-full">
    <swiper-container>
      <swipers v-for="(card,i) in cards" :key="i">
        <card
          :text='card.text'
          :icon='card.icon'
          :type='card.type' />
      </swipers>
    </swiper-container>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card'
import SwiperContainer from '@/components/molecules/SwiperContainer'
import Swipers from '@/components/Swipers'
export default {
  components: { Card,SwiperContainer,Swipers },
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
  },
  // props:{
  //   text:{
  //     type:String,
  //     default:()=>'UX Design'
  //   },
  //   type:{
  //     type:String,
  //     default:()=>'tags'
  //   },
  //   icon:{
  //     type:String,
  //     default:()=>'git.svg'
  //   }
  // },
  data:()=>({
    ops: {
      vuescroll: {
        detectResize: true,
      },
      scrollPanel: {
        // scrollingX: false,
      },
      bar: {
        opacity: 0.1,
      }
    },
  }),
}
</script>
