<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home data="Hi Mangesh," msg="how are you?" /> -->
    <!-- <Conditional /> -->
    <!-- <Forloop /> -->
    <!-- <ClassStyleBinding /> -->
    <!-- <DataBinding /> -->
    <!-- <Props v-bind:users="users" /> -->
    <!-- <h1>{{ title }}</h1>
    <Child v-on:changeTitle="updateTitle($event)" /> -->
    <!-- <Form /> -->
    <!-- <FormValidation /> -->
    <!-- <Filter1 /> -->
    <!-- <Bootstrap /> -->
    <!-- <FetchData /> -->
    <!-- <PostData /> -->
    <!-- <DeleteData /> -->
    <!-- <Routing1 /> -->
    <!-- <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/form">Form</router-link>
        </li>
        <li>
          <router-link to="/details">Details</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view> -->

    <!-- <DRoute /> -->
    <CustomDirective />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/Home.vue";
// import Conditional from "./components/Conditional.vue";
// import Forloop from "./components/Forloop.vue";
// import ClassStyleBinding from "./components/ClassStyleBinding.vue";
// import DataBinding from "./components/DataBinding.vue";
// import Props from "./components/Props.vue";
// import Child from "./components/Child.vue";
// import Form from "./components/Form.vue";
// import FormValidation from "./components/FormValidation.vue";
// import Filter1 from "./components/Filter1.vue";
// import Bootstrap from "./components/Bootstrap.vue";
// import FetchData from "./components/FetchData.vue";
// import PostData from "./components/PostData.vue";
// import DeleteData from "./components/DeleteData.vue";
// import Routing1 from "./components/Routing1.vue";
// import DRoute from "./components/DynamicComponentRoute.vue";
import CustomDirective from "./components/CustomDirective.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    // Conditional,
    // Forloop,
    // ClassStyleBinding,
    // DataBinding,
    // Props,
    // Child,
    // Form,
    // FormValidation,
    // Filter1,
    // Bootstrap,
    // FetchData,
    // PostData,
    // DeleteData,
    // Routing1,
    // DRoute,
    CustomDirective,
  },
  // for props
  // data() {
  //   return { users: [{ name: "ajay" }, { name: "atul" }, { name: "arun" }] };
  // },

  // for Child
  // data() {
  //   return { title: "props tutorial" };
  // },
  methods: {
    // for Child
    // updateTitle(title) {
    //   this.title = title;
    // },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
