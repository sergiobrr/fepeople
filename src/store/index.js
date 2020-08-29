import Vue from 'vue'
import Vuex from 'vuex'
import { peopleState } from './modules/people/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    peopleState
  }
})
