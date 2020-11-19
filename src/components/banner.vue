<template>
    <div style="padding: 36px 0px 40px 0px;">
        <el-container class="banner-box">
            <el-aside width="216px" class="banner-box-left">
                <div  v-for="(item,index) in items" :key=index :class="hovermun === index?'item item-on':'item'"  @mouseenter="munhover(index)" @mouseleave="munout()">
                    <el-link :underline="false" >
                         <span class="group">{{item.munname}}</span>
                         <i class="el-icon-caret-right"></i>
                    </el-link>
                </div>
                <div v-for="(item,index) in items" :key=item.name v-show="hovermun == index" class="submenu"  @mouseenter="munhover(index)" @mouseleave="munout()">
                        <div class="innerBox">
                            <h6>{{item.groupname}}</h6>
                            <el-divider></el-divider>
                            <el-row>
                                <el-link
                                    v-for="tag in item.list"
                                    :key="tag.name" :underline="false" :href="tag.url">
                                    {{ tag.name }}
                                </el-link>
                            </el-row>
                           
                        </div>
                </div>
            </el-aside>
            <el-main class="banner-box-right">
                <el-carousel height="382px">
                <el-carousel-item v-for="item in bannerUrls" :key="item">
                    <el-image :src="item"  fit="fit"></el-image>
                </el-carousel-item>
                </el-carousel>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerUrls:['https://img.mukewang.com/5eeb15170001b36418720764.jpg','https://img.mukewang.com/5facde180001f82518720764.jpg'],
            items:[
                {   
                    munname:'前沿 / 区块链 / 人工智能',
                    groupname:'前沿技术',
                    list:[
                        {
                            name:'区块链',
                            url:'http://www.baidu.com'
                        },
                        {
                            name:'微服务',
                            url:'www.baidu.com'
                        },
                    ]
                },
                {   
                    munname:'前端 / 小程序 / JS',
                    groupname:'前端技术',
                    list:[
                        {
                            name:'vue',
                            url:'www.baidu.com'
                        },
                        {
                            name:'小程序',
                            url:'www.baidu.com'
                        },
                    ]
                },
            ],
            hovermun:null,
        }
    },
     methods: {
      munhover(index) {
          this.hovermun = index;
      },
      munout(){
           this.hovermun = null
      }
    }
  
}
</script>

<style lang="less"  scoped>
.banner-box{
    margin-top:32px;
    height: 382px;
    box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.2);
    position: relative;
    overflow: hidden;
    width: 1152px;
    margin: auto;
    border-radius: 8px;
    .el-menu{
    border-right: 0;
    }
}

.banner-box-right{
    padding: 0;
}
/* 左侧 */
.banner-box-left{
    background: #2B333B;
    color: #C0C4CC;
    font-size: 13px;
    padding-top: 17px;
    box-sizing: border-box;
    .item{
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        cursor: pointer;
        padding-left: 12px;
        position: relative;
        a{
            display: block;
            color: rgba(255, 255, 255, 0.6);
            padding: 0 16px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            height: 50px;
            transition: all .1s;
            .el-link--inner i{
                position: absolute;
                right: 8px;
                top: 16px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 16px;
            }   
        }
    }
    .item-on{
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
    }
    .submenu{
        background: #fff;
        position: absolute;
        left: 216px;
        top: 0px;
        width: 768px;
        height: 382px;
        z-index: 581;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        .innerBox{
            padding: 26px 36px 32px;
            position: relative;
            min-height: 150px;
            .el-divider--horizontal{
                margin: 10px 0;
            }
            .el-link{
                margin-right: 24px;
                margin-bottom: 16px;
            }
        }
        h6{
            margin: 0;
            font-weight: 800;
            font-size: 18px;
            color: #1f2f3d;
        }
    }
}
</style>
