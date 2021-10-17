<template>
  <div>
    <h1>Get Form Data</h1>
    <form action="">
      <input
        type="text"
        placeholder="enter your name"
        v-model="signup.username"
      />
      <br /><br />
      <input
        type="password"
        placeholder="enter your password"
        v-model="signup.password"
      />
      <br /><br />

      <select v-model="signup.place" name="place" id="place">
        <option value="BLR">BLR</option>
        <option value="DELHI">DELHI</option>
        <option value="MUMBAI">MUMBAI</option>
        <option value="PUNE">PUNE</option>
        <option value="HYD">HYD</option>
      </select>

      <input
        type="checkbox"
        id="cricket"
        value="cricket"
        v-model="signup.hobbies"
      />
      <label for="cricket">Cricket</label>
      <input
        type="checkbox"
        id="football"
        value="football"
        v-model="signup.hobbies"
      />
      <label for="football">Football</label> <br /><br />
      <input type="radio" id="male" value="male" v-model="signup.gender" />
      <label for="male">Male</label>
      <input type="radio" id="female" value="female" v-model="signup.gender" />
      <label for="female">Female</label> <br /><br />

      <button v-on:click="signupUser">SignUp</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormData",
  data() {
    return {
      signup: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
        place: null,
      },
    };
  },
  methods: {
    signupUser(e) {
      e.preventDefault();
      console.log(this.signup);
    },
  },
};
</script>
