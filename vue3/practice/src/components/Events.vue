<template>
  <div>
    <h1 v-on:mouseover="getConsole()">Events in Vue</h1>
    <button v-on:click="getData('cliked')">CLick me</button>
    <h2>{{ count }}</h2>
    <button v-on:click="Add(1)">Add one</button>
    <button v-on:click="Add(-1)">Reduce one</button>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getData(data) {
      alert(data);
    },
    getConsole() {
      console.log("function called");
    },
    Add(num) {
      this.count = this.count + num;
    },
  },
};
</script>
