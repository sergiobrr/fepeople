import * as types from './mutation-types';
import axios from 'axios';

const url = process.env.VUE_APP_ROOT_API + '/' + process.env.VUE_APP_PEOPLE_URL

export default {
  [types.ADDONE] ({commit}, people) {
    commit(types.ADDONE);
    axios.post(url, people)
      .then(res => {
        console.log('response', res);
        commit(types.ADDONESUCCESS);
        commit(types.GETONE, res._id);
      })
      .catch(error => {
        console.log(types.ADDONE, error);
        commit(types.HTTPFAILURE, types.ADDONE)
      });
  },
  [types.DELETEONE] ({commit}, _id) {
    commit(types.DELETEONE);
    const href = url + '/' + _id;
    axios.delete(href)
      .then(res => {
        console.log(types.DELETEONESUCCESS, res);
        commit(types.DELETEONESUCCESS, _id)
      })
      .catch(error => {
        console.log(types.DELETEONE, error);
        commit(types.HTTPFAILURE, types.DELETEONE)
      });
  },
  [types.GETALL] ({commit}) {
    commit(types.GETALL);
    axios.get(url)
      .then(res => {
        commit(types.GETALLSUCCESS, res);
      })
      .catch(error => {
        console.log(types.GETALL, error);
        commit(types.HTTPFAILURE, types.GETALL);
      });
  },
  [types.GETONE]({commit}, _id) {
    commit(types.GETONE);
    const href = url + '/' + _id;
    axios.get(href)
      .then(res => {
        console.log(types.GETONESUCCESS, res);
        commit(types.GETONESUCCESS, res);
      })
      .catch(error => {
        console.log(types.GETONE, error);
        commit(types.HTTPFAILURE, types.GETONE);
      });
  },
  [types.PUT] ({commit}, person) {
    commit(types.PUT);
    const href = url + '/' + person._id;
    axios.put(href, person)
      .then(res => {
        console.log(types.PUTSUCCESS, res);
        commit(types.PUTSUCCESS, res);
      })
      .catch(error => {
        console.log(types.PUT, error);
        commit(types.HTTPFAILURE, types.PUT);
      });
  },
  [types.SETCURRENT]({commit}, person) {
    commit(types.SETCURRENT, person);
  }
};
