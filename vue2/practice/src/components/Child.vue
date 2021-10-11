<template>
  <div>
    <h1>Child Component data from child to parent</h1>
    <button v-on:click="updateTitle">Update Parent Title</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  methods: {
    updateTitle() {
      this.$emit("changeTitle", "Parent Updated");
    },
  },
};
</script>
