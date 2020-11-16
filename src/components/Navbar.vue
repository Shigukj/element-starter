<template>
     <el-header height="70">
            <el-menu default-active="home" class="el-menu-demo" mode="horizontal" @select="handleSelect" router >
                        <el-menu-item>
                           <el-image style="height: 40px;width: 40px;" :src="logo" fit="fit"></el-image>
                        </el-menu-item>
                        <el-menu-item index="home">首页</el-menu-item>
                        <el-menu-item index="course">课程列表</el-menu-item>
                        <el-menu-item index="aboutus" >关于我们</el-menu-item>
                        <el-menu-item class="fr">
                             <el-link href="https://element.eleme.io" target="_blank">登录</el-link>
                              <el-divider direction="vertical"></el-divider>
                             <el-link href="https://element.eleme.io" target="_blank">注册</el-link>
                        </el-menu-item>
                        <el-menu-item class="fr">
                             <el-button type="primary" size="small" round disabled>我的课程</el-button>
                        </el-menu-item>
                        <el-menu-item class="fr">
                            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
                        </el-menu-item>
            </el-menu>
        </el-header>
</template>
<script>
export default {
    data(){
        return{
            search:'',
            logo:require("../assets/logo.png"),
        }
    },
     methods: {
            handleSelect(key, keyPath){
                    console.log(key, keyPath);
                }
    }
  
}
</script>
<style  scoped>
.el-menu--horizontal>.el-menu-item{
    height: 70px;
    line-height: 70px;
}
.fr{
    float: right;
}
.el-header{
    padding: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>
