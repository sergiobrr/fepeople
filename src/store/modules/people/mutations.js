import * as types from './mutation-types';


export default {
  [types.ADDONE](state) {
    state.loading = true;
  },
  [types.ADDONESUCCESS](state, new_person) {
    state.loading = false;
    delete new_person.update._status;
    state.current = Object.assign(new_person.person, new_person.update)
  },
  [types.DELETEONE](state) {
    state.loading = true;
  },
  // TODO: SBAGLIATO DEVE RICARICARE LA PAGINA CORRENTE
  [types.DELETEONESUCCESS](state) {
    state.loading = false;
  },
  [types.GETALL](state) {
    state.loading = true;
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
  [types.PUTSUCCESS](state, new_data) {
    state.loading = false;
    delete new_data.response._status
    state.current = Object.assign(
      state.current,
      new_data.update,
      new_data.response
    )
  },
  [types.SETCURRENT](state, person) {
    state.current = person;
  }
}
