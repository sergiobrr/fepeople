import * as types from './mutation-types';
import axios from 'axios';

const url = process.env.VUE_APP_ROOT_API + '/' + process.env.VUE_APP_PEOPLE_URL

export default {
  [types.ADDONE] ({commit}, people) {
    axios.post(url, people)
      .then(res => {
        console.log('response', res);
        commit(types.ADDONESUCCESS);
        commit(types.GETONE, res._id);
      })
      .catch(error => {
        console.log('error', error);
        commit(types.ADDONEFAILURE)
      });
  },
  [types.DELETEONE] ({commit}, _id) {
    const href = url + '/' + _id;
    axios.delete(href)
      .then(res => {
        console.log(types.DELETEONESUCCESS, res);
        commit(types.DELETEONESUCCESS, _id)
      })
      .catch(error => {
        console.log(types.DELETEONEFAILURE, error);
        commit(types.DELETEONEFAILURE)
      });
  },
  [types.GETALL] ({commit}) {
    axios.get(url)
      .then(res => {
        console.log(types.GETALLSUCCESS, res);
        commit(types.GETALLSUCCESS, res);
      })
      .catch(error => {
        console.log(types.GETALLFAILURE, error);
        commit(types.GETALLFAILURE);
      });
  },
  [types.GETONE]({commit}, _id) {
    const href = url + '/' + _id;
    axios.get(href)
      .then(res => {
        console.log(types.GETONESUCCESS, res);
        commit(types.GETONESUCCESS, res);
      })
      .catch(error => {
        console.log(types.GETONEFAILURE, error);
        commit(types.GETONEFAILURE);
      });
  },
  [types.PUT] ({commit}, person) {
    const href = url + '/' + person._id;
    axios.put(href, person)
      .then(res => {
        console.log(types.PUTSUCCESS, res);
        commit(types.PUTSUCCESS, res);
      })
      .catch(error => {
        console.log(types.PUTFAILURE, error);
        commit(types.PUTFAILURE);
      });
  },
  [types.SETCURRENT]({commit}, person) {
    commit(types.SETCURRENT, person);
  }
};
