import { ActionTree } from "vuex";
import { HistoryState } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<HistoryState, RootState> = {
  setHistoryAllData(data, payload): any {
    const commit: any = data.commit;
    commit("setHistoryData", payload);
  },
  addingHistoryAllData(data, payload): any {
    const commit: any = data.commit;
    commit("setHistoryData", payload);
  },
  deletingHistoryAllData(data, payload): any {
    const commit: any = data.commit;
    commit("setHistoryData", payload);
  }
};
