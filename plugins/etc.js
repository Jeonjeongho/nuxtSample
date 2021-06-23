import Vue from 'vue'
import moment from "moment";
// import VueMeta from 'vue-meta'

import {success, fail, error, network} from "~/codes/network.config";
import message from "~/codes/message.config";

Vue.prototype.$moment = moment;

Vue.prototype.$message = message;
Vue.prototype.$restApl = network;
// Vue.use(VueMeta, {
//     // optional pluginOptions
//     refreshOnceOnNavigation: true
// })
