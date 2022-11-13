<template>
    
<Register />

</template>

<script>

import Register from "../components/Register"

export default {

  name: "RegisterView",
  components:{
    Register
  },
  beforeCreate: function() {
    document.body.className = 'register';
  }
}
</script>

<style scoped>

</style>

