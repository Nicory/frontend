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
    async login(ctx, token = window.localStorage.getItem("token")) {
      const resp = await fetch(`${process.env.API_HOST}/public/auth/${token}`);
      if (resp.status == 401) {
        ctx.state.token = null;
        ctx.state.authed = false;
        return
      }

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
