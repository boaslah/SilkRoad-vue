<template>
  <div>
    <PostProperties/>
  </div>
</template>

<script>

import PostProperties from '../components/PostProperty'


export default {
  name: 'PropertiesView',

  components:{
    PostProperties,
  },

  beforeCreate: function() {
    document.body.className = 'propertiesView';
  }
}

</script>

<style>

</style>

