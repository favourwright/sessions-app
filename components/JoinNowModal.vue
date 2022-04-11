<template>
  <modal modal_ref="join-now">
    <div class="text-gray-80">
      <div class="flex flex-col lg:flex-row gap-4 md:gap-10 max-w-[790px]">
        <div class="min-w-max self-center">
          <img
            class="object-contain mobile:w-[100px]"
            :src="require(`~/assets/images/icons/${meeting.icon}`)"
            :alt="`${meeting.app} logo`">
        </div>
        <div class="flex-grow">
          <h1 class="text-light-blue font-black text-2xl md:text-3xl">{{meeting.tagline}}</h1>
          <p class="leading-[170%] text-lg">{{meeting.desc}}</p>
        </div>
      </div>
      <div class="mt-8">
        <span class="text-light-blue text-semibold text-xl block">Here’s the link to your meeting</span>
        <span class="text-lg block">
          Copy this link and send it to the people you want to join you on this session.
        </span>
        <h1
          @click="HandleCopyLink"
          class="flex justify-between mt-8 relative items-center text-overflow-ellipsis
          bg-white/10 font-black text-white text-lg md:text-2xl px-4 py-3 rounded-2xl"
          alt='meeting link'>
          meet.google.com/fbs-gpwp-teu
          <img
            class="absolute z-10 right-4 bg-black/30 lg:bg-transparent p-2 rounded-lg"
            src="~/assets/images/icons/link.svg"
            alt="link icon">
        </h1>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'
import Button2 from '@/components/atoms/Button2'
import { mapActions } from 'vuex'
export default {
  props:{
    meeting:{
      type: Object,
      default: ()=>({
        app: 'meet',
        icon: 'meet.svg',
        tagline: 'Getting Started with Figma; A Designer’s First Steps',
        desc: `We exist to help people get answers to questions threy’ve
        not found. Either that they cannot ask them or they do not know
        to found. Either that they cannot ask them or they do not know to`,
      })
    },
  },
  components:{
    Modal,
    Button2
  },
  methods:{
    ...mapActions(['HandleOpenModal']),
    HandleCopyLink(ev){
      console.log(ev.target.innerText);
    },
  }
}
</script>

<style>

</style>
