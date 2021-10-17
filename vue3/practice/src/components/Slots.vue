<template>
  <div>
    <!-- 
          To over come limitations of slots we use slots
          when we have to pass diff types ot data dynamically
            how to define default value in slots? we can define them in child
       -->
    <h1>Slots in vue</h1>
    <!-- <User2 data="Mangesh" /> -->
    <User2>
      <h1>this is from slots</h1>
      <a href="">anchore slots are</a> <br />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxTZxJitLLK3Zt5l0Hf4kbzKjGbhtU4xncR4WAeJNuxQHdOsWD-FNrER-2gku9YKOOZI&usqp=CAU"
        alt=""
      />
    </User2>
  </div>
</template>

<script>
import User2 from "./User2.vue";
export default {
  name: "Slots",
  components: {
    User2,
  },
};
</script>
