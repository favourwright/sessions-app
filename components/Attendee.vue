<template>
  <div class="flex space-x-2">
    <avatar-circle :avatar="attendee.avatar" :name="attendee.name" />
    <div>
      <h3 class="font-normal text-base text-white leading-[170%]">
        {{attendee.name}}
        <span class="text-light-blue">{{attendee.action}}</span>
      </h3>
      <span class="font-normal text-base text-gray-70">{{attendee.time}}</span>
    </div>
  </div>
</template>

<script>
import AvatarCircle from '@/components/atoms/AvatarCircle'
export default {
  props:{
    attendee:{
      type:Object,
      default:()=>({
        name: 'John Doe',
        avatar: 'andikan-1.svg',
        time: 'Just now',
        action: 'joined',
      })
    }
  },
  components: { AvatarCircle },
}
</script>

<style

</style>
