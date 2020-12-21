import firebase from "firebase";

export default {
  state: {
    info: {},
    productPageItem: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
    setSelectedItem(state, info) {
      state.productPageItem = info;
    }
  },
  actions: {
    async fetchInfo({ commit }, itemName) {
      try {
        const info = (
          await firebase
            .database()
            .ref(`/${itemName}`)
            .once("value")
        ).val();
        commit("setInfo", info);
        return info;
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    addedSelectedItem({ commit }, selectedItem) {
      commit("setSelectedItem", selectedItem);
    }
  },
  getters: {
    getInfo: s => s.info,
    getItem: s => s.productPageItem
  }
};
