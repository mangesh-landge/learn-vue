<template>
  <div>
    <h1>Hello check onclick</h1>
    <!-- <h2>{{ data }} {{ msg }}</h2> -->
    <button v-on:mouseover="hello('check')">call hello function</button>
    <hr />
    <p><router-link to="user/1">A</router-link></p>
    <p><router-link to="user/2">B</router-link></p>
    <p><router-link to="user/3">C</router-link></p>
    <p><router-link to="user/4">D</router-link></p>
    <p><router-link to="user/5">E</router-link></p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    data: String,
    msg: String,
  },
  methods: {
    //function can be define here
    hello(a) {
      alert(a);
      //   console.log("hello console called");
    },
  },
};
</script>
