<template>
  <div id='app'>
      <vNavbar></vNavbar>
    <router-view></router-view>
  </div>
</template>

<script>
import vNavbar from './components/navbar'
export default {
  components: {
    vNavbar
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
