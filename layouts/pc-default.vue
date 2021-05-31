<template>
  <div>
    pc-default
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: 'user-agent'
}
</script>
<style lang="scss" >
@import "@/assets/scss/pc/app.scss";
</style>
