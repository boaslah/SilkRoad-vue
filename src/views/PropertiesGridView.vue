<template>

  <Properties/>

</template>

<script>

import Properties from '../components/Properties'


export default {
  name: 'PropertiesGrid',

  components:{
    Properties,
  },

  beforeCreate: function() {
    document.body.className = 'propertiesView';
  }
}

</script>

<style>



</style>

