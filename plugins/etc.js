import Vue from 'vue'
import moment from "moment";
// import VueMeta from 'vue-meta'

import {success, fail, error} from "~/codes/network.config";
import message from "~/codes/message.config";

console.log("message" , message); 

Vue.prototype.$moment = moment;

Vue.prototype.$message = message;

// Vue.use(VueMeta, {
//     // optional pluginOptions
//     refreshOnceOnNavigation: true
// })