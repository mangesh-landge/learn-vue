import { createStore } from "vuex";
import counterModule from "../modules/counter/index";
import todoModule from "../modules/todos/index";

export default createStore({
  modules: {
    counter: counterModule,
    todos: todoModule,
  },
  state() {
    return {
      //   count: 10,
      //   todos: [
      //     { id: 1, text: "wakeup early", status: true },
      //     { id: 2, text: "In safe zone", status: true },
      //     { id: 3, text: "arrange meeting", status: false },
      //     { id: 4, text: "go to gym", status: true },
      //     { id: 5, text: "have food", status: false },
      //   ],
    };
  },
  getters: {
    // getTodoById: (state) => (id) => {
    //   return state.todos.find((todo) => todo.id === id);
    // },
    // doneTodos(state) {
    //   return state.todos.filter((todo) => todo.status);
    // },
    // completedTodos(state, getters) {
    //   //   return state.todos.filter((todo) => todo.status).length;
    //   // inthe getters use another getter
    //   return getters.doneTodos.length;
    // },
  },
  // data changing is only done in mutation
  mutations: {
    // increment(state, payload) {
    //   state.count = state.count + payload;
    // },
  },
  actions: {
    //     increment(context, payload) {
    //       setTimeout(() => context.commit("increment", payload), 2000);
    //     },
    //     actionA(context, val) {
    //       return new Promise((resolve) => {
    //         setTimeout(() => {
    //           context.commit("increment", val);
    //           resolve("hello Mangesh here");
    //         }, 2000);
    //       });
    //     },
    //     actionB(context, val) {
    //       context.dispatch("actionA", val).then((res) => {
    //         console.log(res);
    //         console.log("calling success from actionB");
    //       });
    //     },
  },
});
