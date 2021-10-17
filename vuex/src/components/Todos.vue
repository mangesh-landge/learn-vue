<template>
  <div>
    <h3>Todos completed = {{ todosDone }}</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <a href="" @click.prevent="onTodoSelected(todo.id)">
          Task: {{ todo.text }} - status:
          {{ todo.status ? "Done" : "Not done" }}
        </a>
      </li>
    </ul>

    <div v-if="Todo">
      <h3>Selected Todo</h3>
      <div>ID: {{ Todo.id }}</div>
      <div>Task: {{ Todo.text }}</div>
      <div>Status: {{ Todo.status }}</div>
    </div>

    <h3>Completed todos</h3>
    <p v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Todos",
  data() {
    return {
      selectedId: 0,
      todo: "",
    };
  },
  computed: {
    ...mapState({
      todoList: (state) => state.todos.todos,
    }),
    ...mapGetters({
      todosDone: "todos/completedTodos",
      doneTodos: "todos/doneTodos",
      Todo: "todos/getTodoById",
      //   Todo() {
      //     return this.$store.getters.getTodoById(this.selectedId);
      //   },
    }),
    // todoList() {
    //   return this.$store.state.todos.todos;
    // },
    // by using getters
    // todosDone() {
    //   return this.$store.getters.completedTodos;
    // },

    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    // Todo() {
    //   return this.$store.getters.getTodoById(this.selectedId);
    // },
  },
  methods: {
    // // without using getters
    // todosDone() {
    //   return this.todoList.filter((todo) => todo.status).length;
    // },

    onTodoSelected(id) {
      this.selectedId = id;
      this.todo = this.todoById(id);
    },
  },
};
</script>
