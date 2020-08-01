import Vue from 'vue'
import Vuex from 'vuex';
import auth from '@/store/auth.js'
import guildData from '@/store/guildData.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    guildData
  }
});
