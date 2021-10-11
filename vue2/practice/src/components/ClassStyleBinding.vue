<template>
  <div>
    <h1 class="homeStyle">Classes and Style Binding</h1>
    <h1 v-bind:style="{ color: 'blue' }">Style Binding</h1>
    <h1 v-bind:class="{ display: show }">
      class Binding with object
    </h1>
    <h1 v-bind:class="[arrClass]">
      class Binding with Array
    </h1>
    <h1 v-on:click="conditional" v-bind:class="[show ? 'yesShow' : 'noShow']">
      class Binding with Array Conditional
    </h1>
  </div>
</template>

<script>
export default {
  name: "ClassStyleBinding",
  data() {
    return {
      show: true,
      arrClass: "arrayClass",
    };
  },
  methods: {
    conditional() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.homeStyle {
  color: orange;
}
.display {
  background-color: brown;
}
.arrayClass {
  background-color: coral;
}
.yesShow {
  color: green;
  background-color: red;
}
.noShow {
  color: red;
  background-color: green;
}
</style>
