import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogCards: [
      { title: "Card del Blog 1", cover: "stock-1", date: "25/12/2021"},
      { title: "Card del Blog 2", cover: "stock-2", date: "25/12/2021"},
      { title: "Card del Blog 3", cover: "stock-3", date: "25/12/2021"},
      { title: "Card del Blog 4", cover: "stock-4", date: "25/12/2021"}
    ],

    canEditPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.canEditPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
