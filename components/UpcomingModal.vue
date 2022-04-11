<template>
  <modal modal_ref="upcoming">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="">
        <div>
          <h1 class="text-4xl lg:text-5xl text-light-blue font-black mb-[32px]">
            Getting Started with Figma; A Designer’s First Steps
          </h1>
          <p class="text-[18px] leading-[170%] font-normal text-gray-80">
            We exist to help people get answers to questions they’ve
            not found. Either that they cannot ask them or they do not
            know to frame them, or the answers are not framed well.
          </p>
          <p class="text-[18px] leading-[170%] font-normal text-gray-80">
            Either that they cannot ask them or they do not know to frame
            them, or the answers are not framed well.
          </p>
        </div>
        <div class="mt-10 flex flex-col md:flex-row gap-6 md:gap-2">
          <div class="md:w-1/2">
            <attendees />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-xl font-semibold text-white mb-2">Event’s Conferencing App:</h2>
            <conferencing-apps />
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-auto order-first lg:order-none">
        <div
          class="rounded-2xl 2x:rounded-[32px] bg-white/10 w-full
          flex-grow min-h-[200px] relative overflow-hidden">
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            src="~/assets/images/playground.png"
            alt="">
          <button
            class="font-black text-lg text-white bg-white/10 rounded-xl
            absolute bottom-2 left-2 md:bottom-5 md:left-5 2xl:bottom-4 2xl:left-4 h-10 md:h-12
            px-3 md:px-5 2xl:h-16 2xl:px-[30px]
            ring-[0.3px] ring-white ring-inset">
            Ask A Question
          </button>
        </div>
        <div
          class="mt-8 flex flex-col-reverse md:flex-row justify-between
          items-start md:items-end gap-5 lg:flex-nowrap overflow-hidden">
          <div>
            <dir class="flex space-x-4 items-center">
              <h1
                class="text-2xl lg:text-[32px] font-black mb-1 text-light-blue">
                Sessions
              </h1>
              <live-badge />
            </dir>
            <span class="text-white text-xl font-medium">
              Jan 17th, 2022
            </span>
            <span class="text-gray-80 text-xl font-medium">
              Friday, 10:10pm WAT
            </span>
          </div>
          <button-2 @click.native="HandleOpenModal('join-now')" class="active" bg='bg-light-blue' text="Join Now" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'
import ConferencingApps from '@/components/molecules/ConferencingApps'
import Attendees from '@/components/molecules/Attendees'
import Button2 from '@/components/atoms/Button2'
import LiveBadge from '@/components/atoms/LiveBadge'
import { mapActions } from 'vuex'
export default {
  components:{
    Modal,
    Attendees,
    ConferencingApps,
    Button2,
    LiveBadge
  },
  methods:{
    ...mapActions(['HandleOpenModal']),
  }
}
</script>

<style>

</style>
