<template>
  <div>
    <h1>test</h1>
    <input type="text" placeholder="type something" v-model="name" />

    <div>
      <p v-for="item in data" v-bind:key="item.id">{{ item }}</p>
    </div>

    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      name: "Mangesh",
      data: [
        { id: 1, text: "A" },
        { id: 2, text: "B" },
        { id: 3, text: "C" },
      ],
    };
  },
};
</script>
