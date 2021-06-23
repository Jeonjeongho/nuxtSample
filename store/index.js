export const state = () => ({
  users: [],
  device: "device Test"
});
//getters
export const getters = {
  doubleCounter: (state) => {
    return state.device + Math.random();
  }
};

//actions Asynchronous communication
export const actions = {
  async getUsers() {
    const users = await this.$axios.get("/server-middleware/userJSON");
    //commit("addUsers" , users);
    return users;
  },

  deviceFn() {
    console.log("isType");
    // commit("devicePush" , isType);
  },

  nuxtServerInit({ commit }, { req }) {
    // console.log("nuxtServerInit")
    // if (req.session.user) {
    //     commit('user', req.session.user)
    // }
  }
};

//mutations Reflected after communication
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users });
  },
  devicePush(state) {},

  user() {}
};
