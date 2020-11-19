<template>
  <el-link :underline="false" :href="item.openurl" target="_blank" >
        <div class="course-card-container">
             <div v-if="item.hot == 1" class="course-stat new">新课</div>
            <div v-if="item.recommend == 1" class="course-stat hot">热门</div>
        <div class="course-card-top hashadow">
           
            <el-image :src="item.imgurl" fit="fill" :lazy="true" class="course-banner"></el-image>
            <div  class="course-label" >
                <label v-for="(tag,index) in item.tags" :key="index">{{tag}}</label>
            </div>
        </div>
        <div class="course-card-content">
            <span class="course-card-name">{{item.title}}</span>
            <div class="bottom clearfix">
                <div class="course-card-info">
                    <span><i class="el-icon-alarm-clock"></i>{{item.lontime}}h</span><span><i class="el-icon-user"></i>166</span>
                    <span class="r">9人评价</span>
                </div>
                <p class="course-card-desc">{{ item.desc }}</p>
            </div>
        </div>
    </div>
  </el-link>
</template>
<script>
export default {
    props:{
        item:Object,
    }
}
</script>
<style lang="less" scoped>
.course-card-container{
     &:hover{
        .hashadow{
            box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
        }
        .course-card-name{
           color: #409EFF;
        }
     }
     
    .course-stat{
        position: absolute;
        border: 2px solid #FFFFFF;
        border-radius: 12px;
        top: 8px;
        left: -8px;
        z-index: 4;
        font-family: 'dincondm';
        font-size: 12px;
        color: #FFFFFF;
        line-height: 20px;
        padding: 0 8px;
        &.hot{
            background-color: #F02930;
            background-image: linear-gradient(90deg, #f68688 0%, #f02930 100%);
        }
        &.new{
            background-color: #FFAA00;
            background-image: linear-gradient(90deg, #ffaa00 17%, #f76b1c 100%);
        }
    }
    .course-card-top{
        width: 270px;
        height: 148px;
        position: relative;
        border-radius: 8px;
        transition: all .3s;
        &.hashadow {
            overflow: hidden;
        }
        .course-banner{
            width: 100%;
            height: 100%;
            background-color: #f3f5f7;
            border-radius: 8px;
           
        }
      
        .course-label{
            position: absolute;
            bottom: 6px;
            left: 8px;
            font-size: 12px;
            color: #FFFFFF;
            line-height: 16px;
            label{
                display: inline-block;
                background: rgba(28, 31, 33, 0.6);
                border-radius: 4px;
                padding: 4px 8px;
                margin-right: 4px;
                margin-bottom: 2px;
                font-weight: 200;
            }
        }
    }
    .course-card-content{
        padding: 5px 0;
        .course-card-name{
            font-size: 16px;
            line-height: 24px;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transition: all .3s;
            font-weight: bold;
            height: 46px;
        }
        .course-card-info{
            font-size: 12px;
            color: #9199A1;
            line-height: 18px;
            margin-top: 4px;
            font-weight: 400;
            span{
                display: inline-block;
                margin-right: 12px;
            }
        }
        .course-card-desc{
            font-size: 12px;
            font-weight: 300;
            color: #9199a1;
            line-height: 18px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            height: 36px;
        }
    }
    
}
</style>