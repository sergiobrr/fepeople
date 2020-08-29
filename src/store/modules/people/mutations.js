import * as types from './mutation-types';


export default {
  [types.ADDONE](state) {
    state.loading = true;
  },
  [types.ADDONESUCCESS](state) {
    state.loading = false;
  },
  [types.ADDONEFAILURE](state) {
    state.loading = false;
  },
  [types.DELETEONE](state) {
    state.loading = true;
  },
  // TODO: SBAGLIATO DEVE RICARICARE LA PAGINA CORRENTE
  [types.DELETEONESUCCESS](state, _id) {
    state.loading = false;
    state.people = state.people.filter(
      person => person._id !== _id
    );
  },
  [types.DELETEONEFAILURE](state) {
    state.loading = false;
  },
  [types.GETALL](state) {
    state.loading = true;
  },
  [types.GETALLSUCCESS](state, people) {
    state.loading = false;
    state.people = people;
  },
  [types.GETALLFAILURE](state) {
    state.loading = false;
  },
  [types.GETONE](state) {
    state.loading = true;
  },
  [types.GETONESUCCESS](state, person) {
    state.loading = false;
    state.current = person;
  },
  [types.GETONEFAILURE](state) {
    state.loading = false;
  },
  [types.PUT](state) {
    state.loading = true;
  },
  [types.PUTSUCCESS](state, person) {
    state.loading = false;
    state.current = person;
  },
  [types.PUTFAILURE](state) {
    state.loading = false;
  },
  [types.SETCURRENT](state, person) {
    state.current = person;
  }
}
