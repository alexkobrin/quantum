import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { VuelidatePlugin } from "@vuelidate/core";
import messagePlagin from "./utils/message.plagin";
import VueSplide from "@splidejs/vue-splide";
import loader from "vue-ui-preloader";

import "materialize-css/dist/js/materialize.min.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyC1poeyjxwkn2trvaoAGOd50O9EF0ddMmw",
  authDomain: "quantum-market.firebaseapp.com",
  projectId: "quantum-market",
  storageBucket: "quantum-market.appspot.com",
  messagingSenderId: "428213179260",
  appId: "1:428213179260:web:e43777ffb1cf9013c2caf9"
});

createApp(App)
  .use(store)
  .use(VuelidatePlugin)
  .use(router)
  .use(messagePlagin)
  .use(VueSplide)
  .use(loader)
  .mount("#app");
