import * as types from './mutation-types';
import axios from 'axios';
import helpers from '../../../helpers/resource';

const rootApi = process.env.VUE_APP_ROOT_API + '/';
const url = rootApi + process.env.VUE_APP_PEOPLE_URL;

export default {
  [types.ADDONE] ({commit}, person) {
    commit(types.ADDONE);
    axios.post(url, person)
      .then(res => {
        commit(types.ADDONESUCCESS, {person: person, update: res.data});
      })
      .catch(error => {
        console.log(types.ADDONE, error);
        commit(types.HTTPFAILURE, types.ADDONE)
      });
  },
  [types.DELETEONE] ({commit, getters, dispatch}, selfLink) {
    commit(types.DELETEONE);
    const href = rootApi + selfLink.href;
    axios.delete(
      href,
      {headers: {'If-Match': selfLink._etag}}
      )
      .then(() => {
        commit(types.DELETEONESUCCESS)
        dispatch(types.GETALL, getters.page)
      })
      .catch(error => {
        console.log(types.DELETEONE, error);
        commit(types.HTTPFAILURE, types.DELETEONE)
      });
  },
  [types.GETALL] ({commit}, selfLink) {
    commit(types.GETALL);
    let href = url;
    if(selfLink !== undefined){
      href = selfLink
    }
    axios.get(href)
      .then(res => {
        commit(types.GETALLSUCCESS, res);
      })
      .catch(error => {
        console.log(types.GETALL, error);
        commit(types.HTTPFAILURE, types.GETALL);
      });
  },
  [types.GETONE]({commit}, selfLink) {
    commit(types.GETONE);
    const href = rootApi + selfLink;
    axios.get(href)
      .then(res => {
        commit(types.GETONESUCCESS, res.data);
      })
      .catch(error => {
        console.log(types.GETONE, error);
        commit(types.HTTPFAILURE, types.GETONE);
      });
  },
  [types.PUT] ({commit}, person) {
    commit(types.PUT);
    const href = url + '/' + person._id;
    const etag = person._etag;
    person = helpers.normalizeFields(person);
    axios.put(
      href,
      person,
      {headers: {
        'If-Match': etag
      }
    })
      .then(res => {
        commit(types.PUTSUCCESS, {update: person, response: res.data});
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
