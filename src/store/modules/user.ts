import { User } from "../../types/IUser";
import { RootState } from "../../types/state/IRootState";
import { GetterTree, Module } from "vuex";
import { UserState } from "../../types/state/IUserState";

const state: UserState = {
  user: {
    name: "Aliakbar Ghasemi",
    avatar: "https://avatars.githubusercontent.com/u/33986952?s=40&v=4",
  },
};

const getters: GetterTree<UserState, RootState> = {
  user: (state): User | undefined => state.user,
};

const namespaced = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
};
