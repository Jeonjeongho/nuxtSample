//state 
export const state = () => ({
    users: []
})
//getters 
export const getters = {

}

//actions Asynchronous communication
export const actions = {
    async getUsers() {
        const users = await this.$axios.get("/server-middleware/userJSON");
        //commit("addUsers" , users);
        console.log("!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!s!!!!!!!!!!!!!!!" , users);
        
        return users;
    }
}

//mutations Reflected after communication
export const mutations = {
    addUsers(state, users) {
        state.users.push({...users});
    }
}