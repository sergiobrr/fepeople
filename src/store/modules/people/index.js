import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const people = {
  state: {
    people: {},
    current: {},
    loading: false
  },
  actions,
  getters,
  mutations
}

export * from './mutation-types';

