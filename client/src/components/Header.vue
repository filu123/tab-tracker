<template>
  <v-toolbar fixed class="blue">
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="home">TabTracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat>
        <router-link to="songs">Browse</router-link>
      </v-btn>
      <v-btn class="cyan accent-2" fab to="songs/create" slot="action">
        <v-icon fab>add</v-icon>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat>
        <router-link to="login">Login</router-link>
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn" flat>
        <router-link to="register">Register</router-link>
      </v-btn>

      <v-btn v-if="$store.state.isUserLoggedIn" flat @click="logout">
        <router-link to="register">Log out</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$user.push({
        name: "root"
      });
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.home {
  cursor: pointer;
}
.home:hover {
  color: black;
}
</style>