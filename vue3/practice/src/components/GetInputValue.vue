<template>
  <div>
    <!-- 
      Can we bind values with checkbox and radio buttons? ans: Yes
     -->
    <h1>Get Input field value</h1>
    <input type="text" placeholder="enter email" v-model="email" /> <br /><br />
    <input type="password" placeholder="enter password" v-model="password" />
    <br /><br />
    <button v-on:click="getData()">GetValues</button>
  </div>
</template>

<script>
export default {
  name: "GetInputvalue",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    getData() {
      console.log(this.email, this.password);
    },
  },
};
</script>
