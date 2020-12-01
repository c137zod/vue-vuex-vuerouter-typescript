import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { HistoryState } from "./types";
import { RootState } from "../types";

export const state: HistoryState = {
  historyAll: [],
  historyAdding: [],
  historyDeleting: []
};

const namespaced = true;

export const history: Module<HistoryState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
