import {network} from "~/codes/network.config";
export const state = () => ({
	company: ["forbiz"]
})

export const getters = {
	getList(state) {
		//console.log("state.company", state.company)
		return state.company.join() + Math.random();
	}
};

export const actions = {
	async setUpdate({ commit, dispatch }, account) {
		const _this = this;
		await this.$axios.get("/server-middleware/userJSON").then( res => {
			if(res.status == res.status, network.success.inside ) {
				const _data = res.data.data;
				commit("update" , _data);
				dispatch('setIsAdmin', _data[0]);
			}
		});

	},

	setIsAdmin({ commit, dispatch }, account) {
		console.log("account" , account)
	}
}

export const mutations = {
	add(state, text) {
		console.log("state" , state, text)
		state.company.push(text)
	},
	remove(state, { todo }) {
		state.company.splice(state.company.indexOf(todo), 1)
	},

	update(state, data) {
		state.company.push(...data)
	},
}
