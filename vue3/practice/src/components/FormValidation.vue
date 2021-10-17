<template>
  <div>
    <h1>Form Validation</h1>

    <!-- <p v-if="error.length">
      <b>Please correct the following errors</b>
    </p> -->
    <ul v-for="err in error" v-bind:key="err">
      <li>{{ err }}</li>
    </ul>

    <form @submit="signup">
      <input
        type="text"
        placeholder="enter your name"
        name="username"
        v-model="outData.username"
      />
      <br /><br />
      <input
        type="password"
        placeholder="enter your password"
        name="password"
        v-model="outData.password"
      />
      <br /><br />

      <select v-model="outData.place" name="place" id="place">
        <option value="BLR">BLR</option>
        <option value="DELHI">DELHI</option>
        <option value="MUMBAI">MUMBAI</option>
        <option value="PUNE">PUNE</option>
        <option value="HYD">HYD</option>
      </select>

      <input
        type="checkbox"
        id="cricket"
        name="cricket"
        value="cricket"
        v-model="outData.hobbies"
      />
      <label for="cricket">Cricket</label>
      <input
        type="checkbox"
        id="football"
        name="football"
        value="football"
        v-model="outData.hobbies"
      />
      <label for="football">Football</label> <br /><br />
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        v-model="outData.gender"
      />
      <label for="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        v-model="outData.gender"
      />
      <label for="female">Female</label> <br /><br />

      <button type="submit">SignUp</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormValidation",
  data() {
    return {
      error: [],
      outData: {
        username: null,
        password: null,
        hobbies: [],
        gender: null,
        place: null,
      },
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();
      this.error = [];
      for (const item in this.outData) {
        if (this.outData[item] === "" || this.outData[item].length === 0) {
          this.error.push(item);
        }
      }
      // if (this.error.length === 0) {
      //   alert("dataSubmitted");
      //   this.outData = {};
      // }

      console.warn(this.outData, this.error);
    },
  },
};
</script>
