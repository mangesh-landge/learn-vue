<template>
  <div>
    <h1>Custom Directives in Vue.js</h1>
    <hr />
    <p v-size="'small'">Hello</p>
    <p v-size>Hello</p>
    <p v-size="'big'">Hello</p>
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
};
</script>
