
<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-text-field
          name="input-2"
          label="Email"
          value="Input text"
          v-model="email"
          class="input-group--focused"
        ></v-text-field>
        <br>
        <v-text-field
          name="input-2"
          label="Password"
          type="password"
          value="Input text"
          v-model="password"
          class="input-group--focused"
        ></v-text-field>

        <div class="error" v-html="error"/>
        <br>
        <v-btn class="cyan" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.flex.offset-xs3 {
  width: 50%;
  margin: 0 auto;
}
</style>
