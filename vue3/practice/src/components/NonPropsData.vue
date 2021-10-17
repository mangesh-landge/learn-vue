<template>
  <div>
    <h1>Non-Props Data in Vue</h1>
    <User1 data="something" id="user-cmp" />
  </div>
</template>

<script>
import User1 from "./User1.vue";
export default {
  name: "NonPropsData",
  components: {
    User1,
  },
};
</script>
