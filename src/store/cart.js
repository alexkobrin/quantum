export default {
  state: {
    cart: [],
    selectedItem: {},
    itemCount: null
  },
  mutations: {
    setselectedItem(state, item) {
      state.selectedItem = item;
      state.cart.push(item);
    },

    setItemCount(state) {
      state.itemCount++;
    }
  },
  actions: {
    addSelectedItem({ commit }, item) {
      commit("setselectedItem", item);
    },
    addCount({ commit }) {
      commit("setItemCount");
    }
  },
  getters: {
    getSelectedItem: s => s.selectedItem,
    getCart: s => s.cart
  }
};
