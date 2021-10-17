<template>
  <div>
    <!-- 
            Also called as form modifiers
            Can we aply multiple modifiers? ans : yes eg: v-model.number.lazy
         -->
    <h1>Modifiers in Vue</h1>
    <input type="text" v-model.lazy="data" />
    <!-- .lazy show data when we outfocus 
        .trim remove all spaces from the input
        .number it give number type outPut when we enter number in number type input

    -->
    <h2>Data is: {{ data }}</h2>
  </div>
</template>
<script>
export default {
  name: "Modifiers",
  data() {
    return {
      data: "",
    };
  },
};
</script>
