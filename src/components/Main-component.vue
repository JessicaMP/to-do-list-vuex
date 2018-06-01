<template>
	<main class="container">
		<ol class="row todo-list">
			<li v-for="(li, index) in list" :key="index" class="todo">
				<div class="view">
					<input type="checkbox" v-model="li.completed" class="toggle">
					<!-- <input type="text" class="edit" v-if='li === editing' v-model="li.name" @keyup.enter="doneEdit" @blur="doneEdit"> -->
					<!-- <label for="checkbox" class="notView editing" @dblclick="editTodo" :class="{completed: li.completed}">{{ li.name }}</label> -->
					<label for="checkbox" class="notView editing" :class="{completed: li.completed}">{{ li.name }}</label>
					<div class="box-buttons">
						<!-- <button @click="remove"><i class="fas fa-times"></i></button> -->
					</div>
				</div>
			</li>
		</ol>
	</main>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
     
      editing: {}
    };
	},
	computed: {
		...mapState({
			list: state => state.list
		}),
		list2() {
			return this.$store.state.list
		}
	}
};
</script>
