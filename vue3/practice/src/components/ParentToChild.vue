<template>
  <div>
    <h1>Share data from parent to Child</h1>
    <p>{{ name }}</p>
    <p>{{ user.name }}</p>
    <button v-on:click="getData()">Call Parent Function</button>
  </div>
</template>

<script>
export default {
  name: "ParentToChild",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
};
</script>
