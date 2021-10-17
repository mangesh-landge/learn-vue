<template>
  <div>
    <!-- <h1>Reuse Component Child</h1> -->
    <!-- <h2>{{ data.name1 }}</h2>
    <h2>{{ data.email }}</h2>
    <button v-on:click="getData(data.name1)">Click Me</button> -->

    <h1>Child to Parent</h1>
    <button v-on:click="getUserName(userName)">send User Name</button>
  </div>
</template>

<script>
export default {
  name: "User",
  // reuse component
  // props: {
  //   data: Object,
  //   getData: Function,
  // },

  //Child to parent
  data() {
    return {
      userName: "Mangesh",
    };
  },
  props: {
    getUserName: Function,
  },
};
</script>
