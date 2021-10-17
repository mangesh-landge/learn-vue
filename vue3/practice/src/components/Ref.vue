<template>
  <!-- This Ref is also same as react Ref 
  ref is for to get or set the value of DOM
  We can use mutiple ref in one componenents.
  can we use same ref on two fields, possible but it impacts on both fields so technically not possible
  -->
  <div>
    <h1>Ref in Vue</h1>
    <input type="text" ref="input" />
    <button v-on:click="getData">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Ref",
  methods: {
    getData() {
      this.$refs.input.focus();
      const val = this.$refs.input.value;
      console.log(val);
    },
  },
};
</script>

<style></style>
