import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	list: [
		{ name: "Vue", completed: false },
		{ name: "React", completed: false },
		{ name: "Angular", completed: false }
	]
}

const mutations = {
	saveText(state, val) {
			state.list.push({
				completed: false,
				name: val
			});
	},
	remove(state) {
		for (let i = 0; i < state.list.length; i++) {
			if (val === i) { 
				state.list.splice(i, 1);
				console.log(val);
			}
		}
	},
	editTodo(li) {
		state.editing = li
	},
	doneEdit(li) {
		state.editing = {};
		if (li.name.trim() === '') {
			state.remove(li)
		}
	},
}

const actions = {
	// saveText: ({ commit }, val) => commit('saveText', val),
	remove: ({ commit }) => commit('remove'),
	editTodo: ({ commit }) => commit('saveText'),
	doneEdit: ({ commit }) => commit('saveText'),
}

const getters = {
	list(state) {
		return state.list
	} 
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})