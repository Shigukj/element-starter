<template>
    <el-footer height="auto">
            <el-row class="container-types">
              <el-col :span="18"> 
                   <el-link type="info" :underline="false" v-for="item in flinks" :key="item.name" :href="item.url">{{item.name}}</el-link>
                    <el-divider></el-divider>
                    <p class="footer-copyright">© 2020 imooc.com  京ICP备 12003892号-11 京公网安备11010802030151号 营业执照</p>
              </el-col>
              <el-col :span="4" push="2" class="footer-sns">
                  <div class="l">
                    <el-popover
                        placement="top"
                        title="扫描二维码"
                        width="150"
                        trigger="hover">
                        <p>关注瀚宁官方公众号</p>
                        <el-image :src="wxQRcode"></el-image>
                        <el-link :underline="false" slot="reference">
                            <img :src="weixinico" alt="官方公众号">
                        </el-link>
                    </el-popover>
                     <p>官方公众号</p>
                  </div>
                  <div class="l">
                    <el-link :underline="false">
                        <img :src="weiboico" alt="官方微博">
                    </el-link>
                      <p>官方微博</p>
                  </div>
              </el-col>
            </el-row>
    </el-footer>
</template>
<script>
export default {
    data(){
        return{
            weixinico:require("../assets/weixin.png"),
            weiboico:require("../assets/weibo.png"),
            wxQRcode:"http://www.shigukj.com/static/upload/image/20200528/1590632129252411.jpg",
            flinks:[
                {
                    name:"企业服务",
                    url:"http://www.shigukj.com"
                },
                {
                    name:"关于我们",
                    url:"http://www.shigukj.com"
                }, {
                    name:"我的课程",
                    url:"http://www.shigukj.com"
                }, {
                    name:"登录",
                    url:"http://www.shigukj.com"
                }, {
                    name:"注册",
                    url:"http://www.shigukj.com"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.el-footer{
    padding: 36px 0;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    .el-link{
        margin: 0 10px;
    }
    .el-divider--horizontal{
            margin:5px 0;
        }
    .footer-copyright{
        font-size: 12px;
        line-height: 14px;
        padding: 0;
        padding-left: 10px;
        text-align: left;
        margin-top: 8px;
        color: #93999F;
        line-height: 24px;   
    }
    .footer-sns{
        text-align: center;
        &>div:first-child{
            margin-right: 32px;
        }
        .l{
            p{
                font-size: 12px;
                color: #4D555D;
                line-height: 24px;
                margin-top: 4px;
            }
            img{
                border-radius: 50%;
                padding: 3px;
                background: #99A1A6;
                &:hover{
                   background: rgba(255,255,255,.12);
                }
            }
        }
    }
}
</style>