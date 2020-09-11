import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const peopleState = {
  namespaced: true,
  state: {
    people: {
      _items: [],
      _meta: {},
      _links: {}
    },
    current: null,
    loading: false
  },
  actions,
  getters,
  mutations
}

export * from './mutation-types';

