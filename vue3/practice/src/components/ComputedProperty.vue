<template>
  <div>
    <!-- 
          computed property gives good performence compare to methods.
            It can be used as templets or methods.
       -->
    <h1>ComputedProperty in vue</h1>
    <h2>{{ dollors }}</h2>
    <h2>{{ dollors * rupeeVal }}</h2>
    <h2>This is by Interpolation: {{ dollors * rupeeVal - discount }}</h2>
    <!-- Above code can be written in computed property to get good result -->
    <h2>This is from computed property: {{ getResult }}</h2>
    <h2>This is from methods: {{ getResult1() }}</h2>
  </div>
</template>

<script>
export default {
  name: "ComputedProperty",
  data() {
    return {
      dollors: 100,
      rupeeVal: 70,
      discount: 10,
    };
  },
  computed: {
    getResult() {
      return this.dollors * this.rupeeVal - this.discount;
    },
  },
  methods: {
    getResult1() {
      return this.dollors * this.rupeeVal - this.discount;
    },
  },
};
</script>
