export default {
  state: {
    cart: [],
    selectedItem: {}
  },
  mutations: {
    AddItemeToCart: (state, item) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map(itm => {
          if (item.id === itm.id) {
            isProductExist = true;
            itm.quantity++;
          }
        });
        if (!isProductExist) {
          state.cart.push(item);
        }
      } else {
        state.cart.push(item);
      }
    },
    increment: (state, index) => {
      state.cart[index].quantity++;
    },
    decrement: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },

    DeleteItem: (state, index) => {
      state.cart.splice(index, 1);
    }
  },
  actions: {
    addSelectedItemToCart({ commit }, item) {
      commit("AddItemeToCart", item);
    },
    deleteItemFromCart({ commit }, index) {
      commit("DeleteItem", index);
    },
    incrementQtn({ commit }, index) {
      commit("increment", index);
    },
    decrementQtn({ commit }, index) {
      commit("decrement", index);
    }
  },
  getters: {
    getSelectedItem: s => s.selectedItem,
    getCart: s => s.cart
  }
};
