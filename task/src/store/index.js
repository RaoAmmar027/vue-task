import { createStore } from 'vuex';

const store = createStore({
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
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
});

export default store;
