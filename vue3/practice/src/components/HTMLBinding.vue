<template>
  <div>
    <!-- How binding can be applied on two HTML Elements
        required when we have dynamic HTML
        
         -->
    <h1>HTML Binding</h1>
    <div v-html="tag"></div>
    <p v-html="tag1"></p>
  </div>
</template>
<script>
export default {
  name: "HTMLBinding",
  data() {
    return {
      tag: "<h1>to print the HTML binding required</h1>",
      tag1: "<h1>to print the HTML binding required1</h1>",
    };
  },
};
</script>
