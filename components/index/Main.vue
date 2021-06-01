<template>
  <div class="container">
    pc-index
    <div>
      <Logo />
      <Menu 
        @componentsApiTestFn="apiTestFn"
        @componentsMmentFn="momentFn"
        @componentsGetUsers="getUsers"
        @childDeadEvent="onDeadEvent"
      />
      <p>
        {{apiTest}}
      </p>
    </div>
    <div class="bg">
      background
    </div>
    <div class="bg bg--vue">
      background vue
    </div>
    <div>
      images
      <figure>
        <img src="~/assets/images/common/cover.png" alt="">
      </figure>
      <figure>
        <img src="~/assets/images/common/emilio-garcia-lb9hi0NDjT0-unsplash.jpg" alt="">
      </figure>
    </div>
    <ul>
      <li v-for="(mountains, index) in mountains" :key="index + mountains.title">
        {{mountains.title}}
      </li>
    </ul>
    {{url}} {{description}}
    <p>
      {{$message.alert.alert01}}
    </p>
    <p>
      {{$store.state.device}}
    </p>
    <p>
      {{$device.isDesktop}}
    </p>
    <p>
      {{$device.isMobile}}
    </p>
  </div>
</template>

<style lang="scss">
  p {
    color: $red;
  }
</style>
<script>
import MyMixin from '~/mixins/common'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  props: {
    mountains: {
        default: null
    }
  },

  mixins: [MyMixin],

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
<style lang="scss">
    img {
      max-width: 200px;
    }
    body {
      .bg {

        &--vue {
          border: 1px solid red;
          background-image: url("~/assets/images/common/20180219_Triangle-pattern1_W.jpg");
        }
      }
    }
</style>