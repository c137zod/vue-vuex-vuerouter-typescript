import { MutationTree } from "vuex";
import { HistoryState } from "./types";

export const mutations: MutationTree<HistoryState> = {
  setHistoryData(state, payload: any) {
    //console.log("payload", payload);
    //state = payload;
  }
};
