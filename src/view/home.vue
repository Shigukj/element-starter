<template>
    <el-container>
       <vNavbar></vNavbar>
        
            <Banner></Banner>
            <div>
                <el-button @click="startHacking">Start</el-button>
            </div>
        <el-footer>
        </el-footer>
    </el-container>
</template>
<script>
import vNavbar from '../components/navbar'
import Banner from '../components/banner'
 
export default {
    components: {
    vNavbar,Banner
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>
<style>

</style>