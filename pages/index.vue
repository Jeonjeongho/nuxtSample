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
      <button type="button" @click="momentFn">
        moment Test Btn
      </button>
      <button type="button" @click="getUsers">
        store Test Btn
      </button>
    </div>
  </div>
</template>

<style  lang="scss">

</style>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {

  data() {
    return {
      apiTest : "noData"
    }
  },

  created() {
    console.log("created");
  },

  //computed: mapState(['users']),

  methods: {
    async apiTestFn() {
      const result = await this.$axios.get("/server-middleware/getJSON");
      if(result.status == 200) {
        this.apiTest = result.data.data;
      }
    },

    momentFn() {
      this.apiTest = this.$moment().format("YYYY-DD-MM")
    },

    ...mapActions(['getUsers'])
  },
}
</script>