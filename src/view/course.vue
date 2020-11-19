<template>
   <el-main height="auto">
       <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>筛选</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
           
        </el-card>
   </el-main>
   
</template>
<script>
 
export default {
    components: {
  },
  methods: {

  }
}
</script>
<style lang="less">
@boxwidth:1152px;
body {
    background-color: #f8fafc !important;
}
.container-top-box{
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    padding:0px;
    background-color: #fff;
}

</style>