import { MutationTree } from "vuex";
import { MainState, User } from "./types";

export const mutations: MutationTree<MainState> = {
  usersLoaded(state, payload: Array<User>) {
    state.leftUsers = payload;
  },
  usersLeftEdit(state: MainState, payload: Array<User>) {
    state.leftUsers = payload;
  },
  usersRightEdit(state: MainState, payload: Array<User>) {
    state.rightUsers = payload;
  }
};
