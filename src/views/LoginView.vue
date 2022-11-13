<template>
    
<Login />

</template>

<script>
import Login from '../components/Login'

export default {
  
  name: "LoginView",
  components: {
    Login
  },
  beforeCreate: function() {
    document.body.className = 'login';
  }
}

</script>

<style scoped>

</style>

