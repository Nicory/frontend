import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// app
import App from '@/App.vue'

// views
const MainPage = () => import(/* webpackChunkName: "MainPage" */ "@/views/MainPage.vue");
const NotFound = () => import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue");

// plugins
import '@/plugins/discord'
import '@/plugins/aos'

// styles
import "@/styles/global.scss";

// etc
import M from 'materialize-css'
document.addEventListener("DOMContentLoaded", function() {
  let elems = document.querySelectorAll(".sidenav");
  let instances = M.Sidenav.init(elems);
});

import store from "@/store"
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  mode: "history"
});

const vm = new Vue({
  el: "#app",
  router,
  render: h => h(App),
  store
});

export default vm;
