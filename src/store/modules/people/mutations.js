import * as types from './mutation-types';


export default {
  [types.ADDONE](state) {
    state.loading = true;
  },
  [types.ADDONESUCCESS](state) {
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
  [types.GETALL](state) {
    state.loading = true;
    console.log('SONO IN GETALL...');
  },
  [types.GETALLSUCCESS](state, people) {
    state.loading = false;
    state.people = people.data;
  },
  [types.GETONE](state) {
    state.loading = true;
  },
  [types.GETONESUCCESS](state, person) {
    state.loading = false;
    state.current = person;
  },
  // TODO LOGGARE ERRORE E TIPOLOGIA SU SERVER
  [types.HTTPFAILURE](state, typology) {
    state.loading = false;
    console.log('ERROR DOING', typology)
  },
  [types.PUT](state) {
    state.loading = true;
  },
  [types.PUTSUCCESS](state, person) {
    state.loading = false;
    state.current = person;
  },
  [types.SETCURRENT](state, person) {
    state.current = person;
  }
}
