<template>
  <div>
    <!-- 

       -->
    <h1>Filter in Vue.js</h1>
    <p>{{ name | Ucase }}</p>
    <p>{{ ammount | DollarToRupees}}</p>
  </div>
</template>

<script>
export default {
  name: "Filter1",
  data() {
    return {
      name: "Mangesh Landge",
      ammount: 100,
    };
  },
};
</script>
