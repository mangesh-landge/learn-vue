<template>
  <div>
    <h1>child part for Non-props</h1>
    <p>Mangesh</p>
    <p>Mangesh1</p>
    <p v-bind="$attrs">Mangesh2</p>
    <!-- <p>{{ data }}</p> -->
  </div>
</template>

<script>
export default {
  name: "User1",
  inheritAttrs: false,
  props: {
    data: String,
  },
  //   if we define passing data in props then we can receive them as attrs(Attributes)
};
</script>
