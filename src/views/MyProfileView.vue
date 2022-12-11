<template>
  <div>
    <MyProfile />
  </div>
</template>

<script>

import MyProfile from '../components/MyProfile'


export default {
  name: 'MyProfileView',

  components:{
    MyProfile,
  },

  beforeCreate: function() {
    document.body.className = 'propertiesView';
  }
}

</script>

<style>

</style>

