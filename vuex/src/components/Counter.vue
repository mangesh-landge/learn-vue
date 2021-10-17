<template>
  <div>
    <h1>Count is {{ count }}</h1>
    <button @click.prevent="onIncriment(2)">Increment</button>
    <button @click.prevent="onIncriment(-1)">Decrement</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Counter",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: (state) => state.counter.count,
    }),
    // count() {
    //   return this.$store.state.count;
    // },
  },
  methods: {
    ...mapActions({
      onIncriment: "counter/actionB",
    }),
    // onIncriment(val) {
    //   //   this.$store.state.count = this.$store.state.count + val;
    //   //   this.$store.commit("increment", val);  // by mutation

    //   //   this.$store.dispatch("increment", val); // by actions

    //   //   this.$store
    //   //     .dispatch("actionA", val) // by actions inside the action
    //   //     .then((res) => {
    //   //       console.log("calling then success");
    //   //       console.log(res);
    //   //     });

    //   this.$store.dispatch("actionB", val);
    // },
  },
};
</script>
