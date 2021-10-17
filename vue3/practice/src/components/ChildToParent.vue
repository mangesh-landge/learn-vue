<template>
  <div>
    <h1>Data transfer from child to Parent</h1>
    <User :getUserName="getUserName" />
  </div>
</template>

<script> 
import User from "./User.vue";
export default {
  name: "ChildToParent",
  components: {
    User,
  },
  data() {
    return {
      chilUser: "",
    };
  },
  methods: {
    getUserName(name) {
      alert(name);
      this.chilUser = name;
    },
  },
};
</script>
