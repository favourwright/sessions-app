<template>
<swiper
  :style="{ '--swiper-navigation-color': '#2a9d8f', '--swiper-pagination-color': '#2a9d8f' }"
  class="swiper"
  :options="swiperOptions">
  <slot></slot>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
export default {
  props:{
    slidesPerView_sm:{
      type: Number, default:()=>1
    },
    gap_sm:{
      type: Number, default:()=>10
    },
    slidesPerView_md:{
      type: Number, default:()=>2
    },
    gap_md:{
      type: Number, default:()=>20
    },
    slidesPerView_lg:{
      type: Number, default:()=>2
    },
    gap_lg:{
      type: Number, default:()=>20
    },
  },
  components: { Swiper },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        // loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
        watchOverflow:true,
        keyboard: {
          enabled: true,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true,
        //   clickable: true,
        // },
        breakpoints:{
          '0': {
            slidesPerView: this.slidesPerView_sm,
            spaceBetween: this.gap_sm,
          },
          '640': {
            slidesPerView: this.slidesPerView_md,
            spaceBetween: this.gap_md,
          },
          '1024': {
            slidesPerView: this.slidesPerView_lg,
            spaceBetween: this.gap_lg,
          },
        }
      }
    }
  },
}
</script>
