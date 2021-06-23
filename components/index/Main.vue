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
        @objectArrTestBtn="objectArrTest"
      />
      <button type="button" @click="add('netmarble')">netmarble module Test</button>
      <button type="button" @click="update">netmarble module update</button>
      <p>
        {{apiTest}}
      </p>
    </div>
    <p>
      {{$restApl.success.inside}}
      store module type
      {{testArr}}<br/>
      {{getList}}<br/>
      <a href="https://uxgjs.tistory.com/149">https://uxgjs.tistory.com/149</a> <br/>
      <a href="https://kdydesign.github.io/2019/04/06/vuejs-vuex-helper/">
      https://kdydesign.github.io/2019/04/06/vuejs-vuex-helper/</a><br/>
      <a href="https://ko.nuxtjs.org/docs/2.x/directory-structure/store/">
        https://ko.nuxtjs.org/docs/2.x/directory-structure/store/
      </a><br/>
      <a href="https://velog.io/@skyepodium/VUEX-store-%EC%97%AC%EB%9F%AC-%EA%B0%9C%EB%A5%BC-%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0">
      https://velog.io/@skyepodium/VUEX-store-%EC%97%AC%EB%9F%AC-%EA%B0%9C%EB%A5%BC-%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0</a>
    </p>
    <p>
      ssl 인증서 오류<br/>
      <a href="https://stackoverflow.com/questions/55440261/nuxt-js-problem-with-server-side-api-call-with-https">
      해결방법 url</a><br/>
      <a href="http://registry.npmjs.org/">
      미 해결 방법 url
      </a>
    </p>
    <p>
      네임스페이스<br/>
      <a href="https://xn--xy1bk56a.run/vuex/4-vuex-options/NamespacedModules.html#%EC%BD%94%EB%93%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81">
      https://xn--xy1bk56a.run/vuex/4-vuex-options/NamespacedModules.html#%EC%BD%94%EB%93%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81</a>
    </p>
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
    // console.log("$restApl.success.inside" , this.$restApl.success.inside)
    //console.log("created");
    //console.log("this.$store.state" , mapState("modules", ["companyStore/company"]))
    // console.log("$store.state.device" , this.$store.state.modules.companyStore.company);
  },

  computed: {
    description() {
      return "description Test"
    },

    ...mapState('modules/companyStore', {
        testArr: state => state.company
    }),

    ...mapGetters('modules/companyStore', {
      getList : "getList"
    }),

    url() {
      return (process.env.BASE_URL || 'http://localhost:3000') + this.$route.fullPath + Math.random();

    }
  },

  //computed: mapState(['users']),

  methods: {
    ...mapActions("modules", {
      update: 'companyStore/setUpdate',
    }),

    ...mapMutations("modules", {
      add: 'companyStore/add',
      remove: 'companyStore/remove',
    }),

    onDeadEvent(data) {
      console.log("data", data);
    },

    objectArrTest({build}) {
      console.log(build);
    },
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
