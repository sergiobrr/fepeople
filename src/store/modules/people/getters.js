const url = process.env.VUE_APP_ROOT_API + '/'
  + process.env.VUE_APP_PEOPLE_URL + '/';

export default {
  people(state) {
    return state.people;
  },
  current(state) {
    return state.current;
  },
  page(state) {
    return url + state.people._links.self.href;
  },
  next(state) {
    return state.people._links.next ?
      url + state.people._links.next.href :
      null;
  },
  previous(state) {
    return state.people._links.prev ?
      url + state.people._links.prev.href :
      null;
  },
  last(state) {
    return state.people._links.last ?
      url + state.people._links.last.href :
      null;
  }
}
