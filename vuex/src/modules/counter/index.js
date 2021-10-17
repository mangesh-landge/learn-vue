import { COUNTER_INCREMENT } from "../../store/storeConstants";

const counterModule = {
  namespaced: true,
  state() {
    return {
      count: 10,
    };
  },
  mutations: {
    [COUNTER_INCREMENT](state, payload) {
      state.count = state.count + payload;
    },
  },
  getters: {},
  actions: {
    increment(context, payload) {
      setTimeout(() => context.commit(COUNTER_INCREMENT, payload), 2000);
    },

    actionA(context, val) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit(COUNTER_INCREMENT, val);
          resolve("hello Mangesh here");
        }, 2000);
      });
    },

    actionB(context, val) {
      context.dispatch("actionA", val).then((res) => {
        console.log(res);
        console.log("calling success from actionB");
      });
    },
  },
};

export default counterModule;
