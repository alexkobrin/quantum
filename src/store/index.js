import { createStore } from "vuex";
import info from "./info";
import cart from "./cart";
import auth from "./auth";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { info, cart ,auth }
});
