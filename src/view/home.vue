<template>
    <el-container id="home">
        <Banner></Banner>
        <el-main class="container-types container-recommend">
                 <h5 class="types-title">
                     <span>零基础就业</span>
                    <span class="intro">
                        从入门到具备1年开发经验
                    </span>
                </h5>
                <el-row>
                  <el-col :span="6" v-for="(item,index) in recommend_items" :key="item.title">
                      <div  class="item">
                        <i :class="`i-${index}`"></i>
                        <p class="tit">{{item.title}}</p>
                        <p class="desc">{{item.desc}}</p>
                      </div>
                  </el-col>
                </el-row>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>
<script>
import Banner from '../components/banner'
 
export default {
    data(){
        return{
            recommend_items:[
                {
                    title:"Java工程师体系课",
                    desc:"从0到胜任大厂Java岗位"
                },
                {
                    title:"Java工程师体系课1",
                    desc:"从0到胜任大厂Java岗位"
                },
                  {
                    title:"Java工程师体系课2",
                    desc:"从0到胜任大厂Java岗位"
                },
                  {
                    title:"Java工程师体系课3",
                    desc:"从0到胜任大厂Java岗位"
                },
            ],
        }
    },
    components: {
    Banner
  },
  methods: {

  }
}
</script>
<style lang="less" >
@boxwidth:1152px;
    .container-types {
        width: @boxwidth;
        margin: auto;
        &.container-recommend{
            padding-top: 0px;
            padding-bottom: 44px;
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
        .item{
            margin-left: 24px;
            font-size: 0;
            display: block;
            width: 270px;
            padding-top: 20px;
            box-sizing: border-box;
            height: 90px;
            overflow: hidden;
            transition: all .3s;
            background: #F3F5F6;
            border-radius: 8px;
            position: relative; 
            &:first-child {
                margin-left: 0;
            }
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
        .el-row{
            margin-top: 24px;
        }
        
        
    }
    

</style>