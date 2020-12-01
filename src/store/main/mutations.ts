import { MutationTree } from "vuex";
import { MainState, User } from "./types";

export const mutations: MutationTree<MainState> = {
  usersLoaded(state: MainState, payload: Array<User>) {
    state = payload;
  }
};
