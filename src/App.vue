<template>

  <Header/>

</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>


<style lang="scss">
.active{
  color:rgb(91, 170, 170);
}
button:hover{
  cursor: pointer;
}
body{
  font-family: 'Roboto', serif;
}

body.home, body.login, body.register{
  background-image: url(./assets/background-image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  position: relative;
}

body.propertiesView{
  background: rgb(233, 233, 233) !important;
}

</style>
