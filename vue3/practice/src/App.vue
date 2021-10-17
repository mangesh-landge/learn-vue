<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <hr />
    <!-- <Interpolation /> -->
    <!-- <Events /> -->
    <!-- <TwoWayBinding /> -->
    <!-- <InputValue /> -->
    <!-- <Form /> -->
    <!-- <Conditiional /> -->
    <!-- <ForLoop /> -->
    <!-- <Child name="Mangesh" :user="user" :getData="getData" /> -->
    <!-- <ReuseComponent /> -->
    <!-- <HTMLBinding /> -->
    <!-- <ClassBinding /> -->
    <!-- <Props name="Mangesh" /> -->
    <!-- <ChildToParent /> -->
    <!-- <Ref /> -->
    <!-- <FormValidation /> -->
    <!-- <Modifiers /> -->
    <!-- <NonPropsData /> -->
    <!-- <ComputedProperty /> -->
    <!-- <Watchers /> -->
    <!-- <Slots /> -->
    <!-- <MultipleSlots /> -->
    <!-- <DynamicComponent /> -->
    <!-- <TeleportComponent /> -->
    <Test />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Interpolation from "./components/InterpolationAndData.vue";
// import Events from "./components/Events.vue";
// import TwoWayBinding from "./components/TwoWayBinding.vue";
// import InputValue from "./components/GetInputValue.vue";
// import Form from "./components/FormData.vue";
// import Conditiional from "./components/Conditional.vue";
// import ForLoop from "./components/ForLoop.vue";
// import Child from "./components/ParentToChild.vue";
// import ReuseComponent from "./components/ReuseComponent.vue";
// import HTMLBinding from "./components/HTMLBinding.vue";
// import ClassBinding from "./components/ClassBinding.vue";
// import Props from "./components/Props.vue";
// import ChildToParent from "./components/ChildToParent.vue";
// import Ref from "./components/Ref.vue";
// import FormValidation from "./components/FormValidation.vue";
// import Modifiers from "./components/Modifiers.vue";
// import NonPropsData from "./components/NonPropsData.vue";
// import ComputedProperty from "./components/ComputedProperty.vue";
// import Watchers from "./components/Watchers.vue";
// import Slots from "./components/Slots.vue";
// import MultipleSlots from "./components/MultipleSlotes.vue";
// import DynamicComponent from "./components/DynamicComponent.vue";
// import TeleportComponent from "./components/TeleportComponent.vue";
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Interpolation,
    // Events,
    // TwoWayBinding,
    // InputValue,
    // Form,
    // Conditiional,
    // ForLoop,
    // Child,
    // ReuseComponent,
    // HTMLBinding,
    // ClassBinding,
    // Props,
    // ChildToParent,
    // Ref,
    // FormValidation,
    // Modifiers,
    // NonPropsData,
    // ComputedProperty,
    // Watchers,
    // Slots,
    // MultipleSlots,
    // DynamicComponent,
    // TeleportComponent,
    Test,
  },

  //ParentToChild
  // data() {
  //   return {
  //     user: { name: "Anil", email: "Anil@gmail.com" },
  //   };
  // },
  // methods: {
  //   getData() {
  //     console.log("Parent function called");
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
