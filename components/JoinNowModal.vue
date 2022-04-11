<template>
  <modal modal_ref="join-now">
    Hey
  </modal>
</template>

<script>
import Modal from '@/components/Modal'
import Button2 from '@/components/atoms/Button2'
import { mapActions } from 'vuex'
export default {
  components:{
    Modal,
    Button2
  },
  methods:{
    ...mapActions(['HandleOpenModal']),
  }
}
</script>

<style>

</style>
