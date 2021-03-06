import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { VuelidatePlugin } from "@vuelidate/core";
import messagePlagin from "./utils/message.plagin";



import "materialize-css/dist/js/materialize.min.js";



createApp(App)
  .use(store)
  .use(VuelidatePlugin)
  .use(router)
  .use(messagePlagin)
  
 

  .mount("#app");
