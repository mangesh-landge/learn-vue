<template>
  <div>
    <h1>User component</h1>
    <h2>User id id {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
};
</script>
