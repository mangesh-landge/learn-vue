<template>
  <div>
    <!-- 

     -->
    <h1>ReUse Components</h1>
    <ul>
      <li v-for="item in users" :key="item.name">
        <User :data="item" :getData="getData" />
      </li>
    </ul>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "ReUseComponent",
  components: {
    User,
  },
  data() {
    return {
      users: [
        { name1: "Anil1", email: "anil1@email.com" },
        { name1: "Anil2", email: "anil2@email.com" },
        { name1: "Anil3", email: "anil3@email.com" },
        { name1: "Anil4", email: "anil4@email.com" },
      ],
    };
  },
  methods: {
    getData(name1) {
      alert(name1);
    },
  },
};
</script>
