import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { MainState } from "./types";
import { RootState } from "../types";

export const state: MainState = [];

const namespaced = true;

export const main: Module<MainState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
