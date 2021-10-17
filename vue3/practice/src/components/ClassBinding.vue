<template>
  <div>
    <!-- 
          Some time we pass dynamic classes, this is the example
       -->
    <h1>Class Binding</h1>
    <h2 :class="applyStyle">Home Component</h2>
    <button v-on:click="colorful = !colorful">aplly Style</button>
  </div>
</template>

<script>
export default {
  name: "ClassBinding",
  data() {
    return {
      colorful: true,
    };
  },
  computed: {
    applyStyle() {
      return {
        green: this.colorful,
        err: true,
        font: true,
      };
    },
  },
};
</script>

<style>
.green {
  background: green;
  width: 500px;
  padding: 5px;
  margin: auto;
}
.err {
  color: red;
}
.font {
  font-size: 36px;
}
</style>
