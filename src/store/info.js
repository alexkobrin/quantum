//import firebase from "firebase"

export default {
  state: {
    info: {},
    hello: {
      count: 1
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {},
  getters: {
    info: s => s.info
  }
};
