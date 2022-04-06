import Vue from 'vue'
export default () => {
  // GLOBAL EVENTS ALL COMPONENTS CAN LISTEN ON
  window.EV_GLOBAL = new Vue()
}
