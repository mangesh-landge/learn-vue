<template>
  <div>
    <h1>Post data to API</h1>
    <hr />
    <form @submit="signup" method="post">
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        v-model="register.name"
      />
      <br /><br />
      <input
        type="text"
        name="job"
        placeholder="enter job role"
        v-model="register.job"
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
export default {
  name: "PostData",
  data() {
    return {
      register: {
        name: null,
        job: null,
      },
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();
      //   console.log(this.register);
      this.axios
        .post(`https://reqres.in/api/users`, this.register)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
