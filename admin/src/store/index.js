import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    changeCollapsed(state) {
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
  },
  // plugins: [createPersistedState({
  //   paths:['isCollapsed'] //控制是否持久化
  // })],
})
export default store
