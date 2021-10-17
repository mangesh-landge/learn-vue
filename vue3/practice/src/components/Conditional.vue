<template>
  <div>
    <h1 v-if="show">conditional rendering in Vue JS</h1>
    <h1 v-else>conditional rendering else block</h1>
    <button v-on:click="display">Toggle element</button>
  </div>
</template>

<script>
export default {
  name: "Conditional",
  data() {
    return { show: false };
  },
  methods: {
    display() {
      this.show = !this.show;
    },
  },
};
</script>
