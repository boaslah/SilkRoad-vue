<template>

  <Header />

   <!-- <HomePage/> -->

</template>

<script>

import Header from './components/Header'
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    Header,
    HomePage
  }
}
</script>


<style>

body{
    background-image: url(./assets/image3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}
</style>
