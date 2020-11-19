<template>
<el-container id='app' direction="vertical">
    <vNavbar></vNavbar>
    <router-view></router-view>
    <wfooter>
    </wfooter>
</el-container>
</template>

<script>
import vNavbar from './components/navbar';
import wfooter from './components/wfooter'
export default {
  components: {
    vNavbar,wfooter
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
.r{
  float: right;
}
.l{
  float: left;
}
</style>
