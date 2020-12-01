import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { VuelidatePlugin } from "@vuelidate/core";

import "materialize-css/dist/js/materialize.min.js";

createApp(App)
  .use(store)
  .use(VuelidatePlugin)
  .use(router)
  .mount("#app");
