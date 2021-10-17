<template>
  <div>
    <h1>for loop</h1>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Forloop",
  data() {
    return {
      users: [
        { id: 1, name: "Mangesh", email: "a@gamil.com" },
        { id: 2, name: "Ganesh", email: "b@gamil.com" },
        { id: 3, name: "Arun", email: "c@gamil.com" },
        { id: 4, name: "Arjun", email: "d@gamil.com" },
        { id: 5, name: "Sachin", email: "e@gamil.com" },
      ],
    };
  },
};
</script>
