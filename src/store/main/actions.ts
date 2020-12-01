import { ActionTree } from "vuex";
import axios from "axios";
import { MainState, User } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<MainState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: "https://jsonplaceholder.typicode.com/users"
    }).then(
      response => {
        const users: Array<User> = response && response.data;
        users.forEach((el: User): void => {
          el.id = Math.random()
            .toString(36)
            .substr(2, 9);
        });
        const payload: Array<User> = users;
        commit("usersLoaded", payload);
      },
      error => {
        console.log(error);
        commit("usersError");
      }
    );
  },
  usersLeftEdit(data, payload): any {
    const commit: any = data.commit;
    commit("usersLeftEdit", payload);
  },
  usersRightEdit(data, payload): any {
    const commit: any = data.commit;
    commit("usersRightEdit", payload);
  }
};
