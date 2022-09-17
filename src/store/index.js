import Vue from 'vue';
import Vuex from 'vuex';
import Global from './modules/global';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {
      Global
    }
  })