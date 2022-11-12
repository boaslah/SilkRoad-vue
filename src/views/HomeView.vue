<template>
    
  <HomePage/>

</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage'

export default {
  name: 'HomeView',
  components: {
    HomePage,
  },
  beforeCreate: function() {
    document.body.className = 'home';
  }
}
</script>

<style>

</style>

