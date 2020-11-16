<template>
    <el-main style="padding-top:36px;">
        <el-container class="banner-box">
            <el-aside width="216px">
            </el-aside>
            <el-main class="banner-box-right">
                <el-carousel height="382px">
                <el-carousel-item v-for="item in bannerUrls" :key="item">
                    <el-image :src="item"  fit="fit"></el-image>
                </el-carousel-item>
                </el-carousel>
            </el-main>
        </el-container>
    </el-main>
</template>
<script>
export default {
    data(){
        return{
            bannerUrls:['https://img.mukewang.com/5eeb15170001b36418720764.jpg','https://img.mukewang.com/5facde180001f82518720764.jpg'],
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
.banner-box{
    margin-top:32px;
    height: 382px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    width: 1152px;
    margin: auto;
    border-radius: 8px;
}
.banner-box-right{
    padding: 0;
}
.el-header{
    padding: 0;
}
</style>
