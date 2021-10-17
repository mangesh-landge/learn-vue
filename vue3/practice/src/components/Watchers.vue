<template>
  <div>
    <!-- To absorbe last action value we use watchers -->
    <h1>
      Watchers in Vue
    </h1>
    <h2>{{ count }}</h2>
    <button v-on:click="count = count + 1">Add one</button>
    <button v-on:click="count = count - 1">Reduce one</button>
  </div>
</template>

<script>
export default {
  name: "Watchers", 
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(val, prev) {
      if (val > 5 && val > prev) {
        alert("stop counting");
        this.count = prev;
      }
    },
  },
};
</script>
