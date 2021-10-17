<template>
  <div>
    <!-- 
          What is dynamic component? :
          Why we should not use 'if-else' condition?
          Load dynamic component in proper way.

          can we create nested tab? :yes we can
       -->
    <h1>Dynamic Component</h1>
    <button @click="tab = 'Dynamic1'">load1</button>
    <button @click="tab = 'Dynamic2'">load2</button>
    <button @click="tab = 'Dynamic3'">load3</button>
    <!-- <Dynamic1 />
    <Dynamic2 />
    <Dynamic3 /> -->
    <component :is="tab" />
  </div>
</template>
<script>
import Dynamic1 from "./Dynamic1.vue";
import Dynamic2 from "./Dynamic2.vue";
import Dynamic3 from "./Dynamic3.vue";
export default {
  name: "DynamicComponent",
  components: {
    Dynamic1,
    Dynamic2,
    Dynamic3,
  },
  data() {
    return {
      tab: "Dynamic1",
    };
  },
};
</script>
