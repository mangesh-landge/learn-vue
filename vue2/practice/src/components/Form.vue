<template>
  <div>
    <!-- 
          Make a component and import in app.vue file
          Make input feilds
          Add checkbox and radio button
          Define property for form
          Bnd input field with Property
          Submit Form
       -->
    <h1>Form impimentation</h1>
    <!-- <form action=""> -->
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
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: "Form",
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
    signupUser() {
      console.log(this.signup);
      console.warn(this.signup);
    },
  },
};
</script>
