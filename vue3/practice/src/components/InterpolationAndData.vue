<template>
  <div>
    <h1>InterPolation and Data</h1>
    <!-- writting code in {{}} this and calculating it is called interpolation 
    can we assign value here: yes
    -->
    <p>squre of 10 is {{ 10 ** 2 }}</p>
    <p>this string length {{ "email".length }}</p>
    <p>show email form data {{ email }}</p>
    <p>show name form data func {{ getName() }}</p>
    <p>show name form data func {{ get_name("Arun") }}</p>
  </div>
</template>

<script>
export default {
  name: "InterpolationAndData",
  data() {
    return {
      email: "name@email.com",
      getName: () => {
        return "Mangesh";
      },
    };
  },
  methods: {
    get_name(name) {
      return name;
    },
  },
};
</script>
