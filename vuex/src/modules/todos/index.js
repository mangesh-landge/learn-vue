const todoModule = {
  namespaced: true,

  state() {
    return {
      todos: [
        { id: 1, text: "wakeup early", status: true },
        { id: 2, text: "In safe zone", status: true },
        { id: 3, text: "arrange meeting", status: false },
        { id: 4, text: "go to gym", status: true },
        { id: 5, text: "have food", status: false },
      ],
    };
  },
  mutations: {},
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },

    doneTodos(state) {
      return state.todos.filter((todo) => todo.status);
    },

    completedTodos(state, getters) {
      //   return state.todos.filter((todo) => todo.status).length;
      // inthe getters use another getter
      return getters.doneTodos.length;
    },
  },
  actions: {},
};

export default todoModule;
