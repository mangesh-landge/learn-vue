<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p>from app count is {{ count }}</p>
    <button @click.prevent="onIncriment(1)">Increment</button>
    <button @click.prevent="inc(-1)">Decrement</button>
    <Counter />
    <hr />
    <p>completed todos : {{ todosDone }}</p>
    <Todos />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Todos from "./components/Todos.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { COUNTER_INCREMENT } from "./store/storeConstants";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Counter,
    Todos,
  },
  computed: {
    ...mapState({
      count: (state) => state.counter.count,
      // todo: (state) => state.todos,
    }),
    ...mapGetters({
      todosDone: "todos/completedTodos",
    }),

    // count() {
    //   return this.$store.state.count;
    // },
    // todosDone() {
    //   return this.$store.getters.completedTodos;
    // },
  },
  methods: {
    ...mapActions({
      onIncriment: `counter/actionB`,
    }),

    // onIncriment(val) {
    //   //   this.$store.state.count = this.$store.state.count + val;
    //   //   this.$store.commit("increment", val);  // by mutation

    //   // this.$store.dispatch("increment", val); // by actions

    //   this.$store.dispatch("actionB", val);
    // },

    // ...mapMutations({
    //   inc: "counter/increment",
    // }),  //or

    ...mapMutations("counter", {
      inc: COUNTER_INCREMENT,
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
