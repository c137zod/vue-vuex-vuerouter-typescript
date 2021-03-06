import Vue from "vue";
import Vuex from "vuex";
import { main } from "./main/index";
import { history } from "./history/index";
import { RootState } from "./types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0"
  },
  modules: {
    main,
    history
  },
  mutations: {},
  actions: {}
});
