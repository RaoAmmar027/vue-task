import { createStore } from 'vuex'

export const store = createStore({
  state: {
    users: [],
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    addUser({ commit }, user) {
      commit('ADD_USER', user);
    },
  },
});
