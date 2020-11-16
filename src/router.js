import Vue from 'vue'
import ElementUI from 'element-ui'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'
import  home from './view/home'
import  course from './view/course'
import  aboutus from './view/aboutus'

Vue.use(ElementUI);
Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes:[
        {
            path:'/home',
            name:'index',
            component:home
        },
        {
            path:'/course',
            name:'course',
            component:course
        },
        {
            path:'/aboutus',
            name:'aboutus',
            component:aboutus
        },
        {   //路由重定向
            path:'*',
            name:'index',
            redirect:'/home'
        }
    ]
})

export default router