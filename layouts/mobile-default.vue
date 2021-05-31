<template>
  <div>
    mobile-default
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: 'user-agent'
}
</script>
<style lang="scss" >
@import "@/assets/scss/mobile/app.scss";
</style>
