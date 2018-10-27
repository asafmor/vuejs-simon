import Vue from 'vue'
import Vuex from 'vuex'
import tree from './modules/tree';

import * as actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
      tree
  }
})
