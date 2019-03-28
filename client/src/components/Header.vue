<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link to="/">TabTracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat>Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>
        <router-link to="register">Register</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
</style>