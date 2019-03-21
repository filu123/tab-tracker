/* eslint-disable-key-spacing */
<template>
<div >
  <input type="email" value="email" v-model="email" placeholder="e-mail"/>
  <input type="password" value="password" v-model="password" placeholder="password"/>
  <button @click="register">Register</button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
