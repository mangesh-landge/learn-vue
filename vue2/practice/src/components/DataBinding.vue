<template>
  <div>
    <h1>DataBinding</h1>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      message: "Hi",
    };
  },
};
</script>
 