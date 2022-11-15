<template>
  <div>
    <Properties/>
  </div>
</template>

<script>

import Properties from '../components/Properties'


export default {
  name: 'PropertiesView',

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

