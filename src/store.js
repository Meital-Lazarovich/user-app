import Vue from 'vue'
import Vuex from 'vuex'
import { userService } from './services/userService'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    loggedinUser: null
  },
  getters: {
    loggedinUser(state) {
      if (state.loggedinUser) SocketService.emit("room", state.loggedinUser._id);
      return state.loggedinUser;
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user;
    },
  },
  actions: {
    async login(context, { credentials }) {
      console.log('login store -> credentials');
      const user = await userService.login(credentials);
      context.commit({ type: 'setUser', user });
      return user;
    },
    async logout(context) {
      await userService.logout()
      context.commit({ type: 'setUser', user: null })
    },
  }
})
