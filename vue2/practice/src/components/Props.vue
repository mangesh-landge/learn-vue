<template>
  <!-- 
    What is Props
    Make A component
    Define Props
    Pass props
    Accesa Props
 -->
  <div>
    <h1>Props in vue.js</h1>
    <!-- <h3>{{ name }}</h3> -->
    <h3 v-for="user in users" :key="user.name">{{ user.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Props",
  props: ["users"],
};
</script>
