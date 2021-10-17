<template>
  <div>
    <!-- 
        Also we can creat child inside the child and also use slot
       -->
    <h1>Multiple slotes and named slotes in vue</h1>

    <User2>
      <template v-slot:header>
        <h1>This is from header</h1>
      </template>
      <template v-slot:containt>
        <p>This is from container</p>
      </template>
      <template v-slot:footer>
        <button>This is from footer</button>
      </template>
    </User2>

    <User2>
      <template v-slot:header>
        <h1>Facebook</h1>
      </template>
      <template v-slot:containt>
        <p>Post</p>
      </template>
      <template v-slot:footer>
        <button>Submit</button>
      </template>
    </User2>
    <!-- <User2></User2> -->
    <!-- <User2></User2> -->
  </div>
</template>

<script>
import User2 from "./User2.vue";
export default {
  name: "MultipleSlots",
  components: {
    User2,
  },
};
</script>
