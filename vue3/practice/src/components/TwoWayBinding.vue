<template>
  <div>
    <!-- 
      This save time and code complexity.

      binding a propery with model and view is called two way binding.
      if we do changes in model then reflections will shows in View. and vice-verca.

      Model:Where we write JS code
      View: whatever we write in templete.

     -->
    <h1>Two way binding</h1>

    <input type="text" v-model="count" />
    <h2>{{ count }}</h2>
  </div>
</template>
<script>
export default {
  name: "TwoWayBinding",
  data() {
    return {
      count: 10,
    };
  },
};
</script>
