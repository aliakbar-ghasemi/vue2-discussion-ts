import { RootState } from "../types/state/IRootState";
import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

import { user } from "./modules/user";
import { discussion } from "./modules/discussion";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  state: {
    version: "1.0.0",
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    discussion,
  },
});
