<template>
	<header>
		<h1>{{ title }}</h1>
		<nav>
			<input type="checkbox" v-model="selectAll"/>
			<input v-model.trim="val" :placeholder="text" @keyup.enter="save"/>
			<button @click="save">+</button>
		</nav>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
			title: "To do list",
			selectAll: false,
			text: "Writing....",
			val: ''
    };
	},
	// computed: mapGetters([
	// 	'val'
	// ]),
	methods: {
		save() {
			// this.saveText(this.val)
			this.$store.commit('saveText', this.val)
			this.val = ''
		},
		// ...mapActions([
		// 	'saveText'
		// ])
	}
};
</script>
