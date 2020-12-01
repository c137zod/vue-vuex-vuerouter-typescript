import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

import { AxiosPlugin } from "./axios-plugin";
import vuetify from "./plugins/vuetify";

// pass in your custom options as second parameter if applicable
Vue.use(AxiosPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
