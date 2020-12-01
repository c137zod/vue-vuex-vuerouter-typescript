import { GetterTree } from "vuex";
import { HistoryState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<HistoryState, RootState> = {
  getHistory(state): any {
    return state.historyAll;
  }
};
