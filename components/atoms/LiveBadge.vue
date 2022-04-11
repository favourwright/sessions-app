<template>
  <div class="text-white flex items-center gap-2">
    <span class="w-[10px] h-[10px] bg-red-1 rounded-full"></span>
    Live
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
  animation: blinker 1s linear infinite;
}
@keyframes blinker {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
