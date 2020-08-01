export default {
  state: () => ({
    guildData: {}
  }),
  mutations: {
    setData(state, data) {
      state.guildData = data;
    }
  }
};
