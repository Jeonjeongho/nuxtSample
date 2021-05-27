<template>
  <div class="container">
    <div>
      <Logo />
      <p>
        {{apiTest}}
      </p>
      <button type="button" @click="apiTestFn">
        api Test Btn
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  lang="scss">
</style>
<script>
export default {
  data() {
    return {
      apiTest : "noData"
    }
  },
  methods: {
    async apiTestFn() {
      const result = await this.$axios.get("/server-middleware/getJSON");
      if(result.status == 200) {
        this.apiTest = result.data.data;
      }
    }
  },
}
</script>