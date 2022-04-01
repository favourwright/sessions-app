<template>
<swiper-slide>
  <slot></slot>
</swiper-slide>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    SwiperSlide,
  },
}
</script>
