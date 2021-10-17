<template>
  <div>
    <h1>child for slots</h1>
    <!-- <slot><p>slots test</p> </slot> -->

    <slot name="header"></slot>
    <slot name="containt"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "User2",
  inheritAttrs: false,
  // props: {
  //   data: String,
  // },
};
</script>
