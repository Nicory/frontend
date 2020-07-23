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
const Commands = () => import(/* webpackChunkName: "Commands" */ "@/views/Commands.vue");
const Stats = () => import(/* webpackChunkName: "Stats" */ "@/views/Stats.vue");
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ "@/views/Dashboard.vue");

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
    },
    {
      path: "/commands",
      component: Commands
    },
    {
      path: "/stats",
      component: Stats
    },
    {
      path: "/dashboard",
      component: Dashboard
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
