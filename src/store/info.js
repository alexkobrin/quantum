import firebase from "firebase";

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const info = (
          await firebase
            .database()
            .ref(`/cellPhones`)
            .once("value")
        ).val();
        commit("setInfo", info);
        return info;
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  getters: {
    getInfo: s => s.info
  }
};
