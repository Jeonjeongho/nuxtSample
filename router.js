import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/main/index'
import test from '~/pages/test'
import moment from "moment";

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: index
      },{
        path: '/test',
        component: test
      }
    ]
  })
}