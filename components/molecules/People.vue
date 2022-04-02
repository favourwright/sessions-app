<template>
  <div class="flex items-center space-x-4">
    <div class="h-[22.96px] flex -space-x-2 min-w-min">
      <div
        v-for="(person,i) in people"
        :key="i"
        class="w-[22.96px] border border-white
        bg-white rounded-full overflow-hidden">
        <img :src="require(`~/assets/images/${person}`)">
      </div>
    </div>
    <span class="font-semibold text-sm text-white">{{text}}</span>
  </div>
</template>

<script>
export default {
  props:{
    people:{
      Array,
      default:()=>[
        'pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg',
        'mymind-tZCrFpSNiIQ-unsplash.jpg',
        'lucas-kapla-wQLAGv4_OYs-unsplash.jpg',
        'pawel-czerwinski-Lki74Jj7H-U-unsplash.jpg',
      ]
    },
    text:{
      String,
      default:()=>'500+ going'
    }
  }
}
</script>

<style>

</style>
