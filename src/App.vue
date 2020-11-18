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
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
p {
    word-break: break-all;
}
</style>
