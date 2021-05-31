
//state
export const state = () => ({
  users: [],
  device: "device Test"
});
//getters
export const getters = {};

//actions Asynchronous communication
export const actions = {
  async getUsers() {
    const users = await this.$axios.get("/server-middleware/userJSON");
    //commit("addUsers" , users);
    console.log(
      "!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!!",
      users
    );

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
