<template>
  <div>
    <!-- install axios: npm i axios vue-axios -->
    <h1>Fetch Data with API</h1>
    <hr />
    <table border="1">
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>AVATAR</th>
      </tr>
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.email }}</td>
        <td><img width="100" height="100" :src="item.avatar" alt="" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

//bhind imported
Vue.use(VueAxios, axios);
export default {
  name: "Fetchdata",
  data() {
    return {
      list: undefined, // or keep []
    };
  },
  // it works after DOM initialization
  mounted() {
    Vue.axios.get(`https://reqres.in/api/users?page=1`).then((res) => {
      this.list = res.data.data;
      console.log(res.data);
    });
  },
};
</script>
