<template>
        <el-main id="home" style="padding:0px;">
            <div class="container-top-box">
             <Banner></Banner>
            <div class="container-types container-recommend">
                <h5 class="types-title">
                    <span>零基础就业</span>
                    <span class="intro">
                        从入门到具备1年开发经验
                    </span>
                </h5>
                <el-row :gutter="20">
                <el-col :span="6" v-for="(item,index) in recommend_items" :key="item.title">
                    <el-link  class="item" :underline="false" :href="item.openurl">
                        <i :class="`i-${index}`"></i>
                        <p class="tit">{{item.title}}</p>
                        <p class="desc">{{item.desc}}</p>
                    </el-link>
                </el-col>
                </el-row>
            </div>

            <div class="container-types container-promote">
                    <h5 class="types-title">
                        <span>职场提升</span>
                        <span class="intro">
                            1年以上开发经验系统成长
                        </span>
                    </h5>
                    <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in promote_items" :key="index">
                        <el-link  class="item" :underline="false" :href="item.openurl">
                                <el-image :src="item.imgurl" fit="fill" ></el-image>
                        </el-link>
                    </el-col>
                    </el-row>
                </div>
            </div>
            <div class="container-main-box">
                <div class="container-types container-newclass">
                    <h5 class="types-title">
                        <span>最新课程</span>
                    </h5>
                    <el-row :gutter="20">
                    <el-col :span="6" v-for="item in newclass_list" :key="item.title" style=" margin-bottom: 20px;">
                        <classitem :item='item'></classitem>
                    </el-col>
                    </el-row>
                </div>
            </div>
        </el-main>
</template>
<script>
// import Banner from '../components/banner'
import Banner from '../components/onlybanner'
import classitem from '../components/classitem'
 
export default {
    data(){
        return{
            recommend_items:[   //推荐课程
                {
                    title:"Java工程师体系课",
                    desc:"从0到胜任大厂Java岗位",
                    openurl:"http://www.baidu.com",
                },
                {
                    title:"Java工程师体系课1",
                    desc:"从0到胜任大厂Java岗位",
                    openurl:"http://www.baidu.com",
                },
                  {
                    title:"Java工程师体系课2",
                    desc:"从0到胜任大厂Java岗位",
                    openurl:"http://www.baidu.com",
                },
                  {
                    title:"Java工程师体系课3",
                    desc:"从0到胜任大厂Java岗位",
                    openurl:"http://www.baidu.com",
                },
            ],
            promote_items:[     //提升课程
                {
                    imgurl:"https://www.imooc.com/static/img/index/index_javaarchitect.png",
                    openurl:"http://www.baidu.com"
                },
                {
                   imgurl:"https://www.imooc.com/static/img/index/index_javafullstack.png",
                   openurl:"http://www.baidu.com"
                },
                  {
                    imgurl:"https://www.imooc.com/static/img/index/index_webfullstack.png",
                    openurl:"http://www.baidu.com"
                },
                  {
                   imgurl:"https://www.imooc.com/static/img/index/index_dataanalysis.png?t=1",
                   openurl:"http://www.baidu.com"
                },
            ],
            newclass_list:[
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:1,
                    recommend:0,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:0,
                    recommend:1,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:1,
                    recommend:1,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:1,
                    recommend:1,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:1,
                    recommend:1,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:0,
                    recommend:0,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:0,
                    recommend:0,
                    openurl:"http://www.baidu.com"
                },
                {
                    imgurl:"https://img3.mukewang.com/szimg/5f65f20c08d369bb06000338-360-202.jpg",
                    title:"Vue3.0(正式版) + TS 仿知乎专栏企业级项目",
                    usernum:"25",
                    lontime:"2",
                    desc:"覆盖Java程序员不同成长阶段的核心问题与最佳解决方案",
                    tags:["vue.js","jave"],
                    hot:1,
                    recommend:0,
                    openurl:"http://www.baidu.com"
                },
          
            ]
        }
    },
    components: {
    Banner,classitem
  },
  methods: {

  }
}
</script>
<style lang="less" >
@boxwidth:1152px;
body {
    background-color: #f8fafc !important;
}
.container-top-box{
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    padding:0px;
    background-color: #fff;
}
.container-main-box{
    box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.06);
}
.container-types {
    width: @boxwidth;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    &.container-recommend,&.container-promote{
        padding-top: 0px;
        padding-bottom: 44px;
    }
    &.container-newclass{
        padding: 36px 0 38px;
    }
    .item{
        height: 90px;
    }
    &.container-promote{
        .item{
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    
    .types-title{
        margin: 0;
        position: relative;
        font-size: 24px;
        color: #1C1F21;
        letter-spacing: 0px;
        line-height: 32px;
        .intro{
            margin-top: 6px;
            margin-left: 12px;
            font-weight: normal;
            font-size: 14px;
            color: #545C63;
            line-height: 20px;
        }
    }
    &.container-recommend{
        .item{
            font-size: 0;
            display: block;
            padding-top: 20px;
            box-sizing: border-box;
            overflow: hidden;
            transition: all .3s;
            background: #F3F5F6;
            border-radius: 8px;
            position: relative; 
            i{
                float: left;
                width: 50px;
                height: 50px;
                background: url("https://www.imooc.com/static/img/index/new/path-2019-9.png") no-repeat;
                background-size: 100%;
                margin-left: 16px;
                margin-right: 12px;
                &.i-0{
                    background-position: center -50px;
                }
                &.i-1{
                    background-position: center 0px;
                }
                &.i-2{
                    background-position: center -100px;
                }
                &.i-3{
                    background-position: center -150px;
                }
            }
            .tit{
                font-size: 18px;
                font-weight: bold;
                color: #1C1F21;
                margin-top: 0px;
            }
            .desc{
                font-size: 14px;
                color: #1C1F21;
                line-height: 16px;
                margin-top: 5px;
                font-weight: 400; 
            }
            &:hover{
                box-shadow: 0px 4px 8px #0000001f;
            }
        }
    }
    
    .el-row{
        margin-top: 24px;
    }
    
    
}

    

  

</style>