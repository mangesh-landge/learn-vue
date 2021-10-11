<template>
  <div>
    <h1>Dynamic Component Routing in Vue.js</h1>
    <hr />
    <component v-bind:is="cmp"></component>
    <button v-on:click="updateCmp('DeleteData')">View and Delete</button>
    <button v-on:click="updateCmp('PostData')">Post</button>
  </div>
</template>

<script>
import DeleteData from "./DeleteData.vue";
import PostData from "./PostData.vue";
export default {
  name: "DynamicComponentRoute",
  components: {
    DeleteData,
    PostData,
  },
  data() {
    return {
      cmp: DeleteData,
    };
  },
  methods: {
    updateCmp(item) {
      this.cmp = item;
    },
  },
};
</script>
