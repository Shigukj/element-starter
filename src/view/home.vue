<template>
    <el-container>
       <vNavbar></vNavbar>
        <el-main>
           
            <div>
                <el-button @click="startHacking">Start</el-button>
            </div>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>
<script>
import vNavbar from '../components/Navbar.vue'

export default {
    components: {
    vNavbar
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