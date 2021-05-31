<template>
  <div class="container">
    <IndexMain 
      v-if="$device.isDesktop"
      :mountains="mountains"
     />
    <IndexMainMobile v-else />
  </div>
</template>

<style lang="scss">

</style>
<script>
import MyMixin from '~/mixins/common'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  // metaInfo: {
  //   title: 'My Example App',
  //   titleTemplate: '%s - Yay!',
  //   htmlAttrs: {
  //     // amp: true
  //   }
  // },
  layout(ctx) {
    return ctx.$device.isDesktop ? 'pc-default' : 'mobile-default'; 
  },

  mixins: [MyMixin],

  async asyncData({ $axios, params }) {
    const api = "https://api.nuxtjs.dev/mountains"
    const mountains = await $axios.get(api).then((respons) => {
      return respons.data;
    });

    return { mountains }
  },

  async fetch() {
    
  },

  data() {
    return {
      apiTest : "noData",
    }
  },

  created() {
    //console.log("created");
  },

  computed: {
    description() {
      return "description Test"
    },

    url() {
      return (process.env.BASE_URL || 'http://localhost:3000') + this.$route.fullPath + Math.random();
      
    }
  },

  //computed: mapState(['users']),

  methods: {
    onDeadEvent(data) {
      console.log("data", data);
    }
  },
}
</script>