export default {
  state: () => ({
    token: "",
    authed: false
  }),
  mutations: {
    setToken(state, token) { 
      state.token = token;
      state.authed = true;
    }
  },
  actions: {
    login(ctx, token = window.localStorage.getItem("token")) {
      // todo: setToken only after validation
      if (window.localStorage.getItem("token")) { 
        return ctx.commit("setToken", token);
      }
      ctx.commit("setToken", token);
      window.localStorage.setItem("token", token)
    }
  },
  getters: {
    authed: (state) => state.authed,
    token: state => state.authed ? state.token : null
  }
}