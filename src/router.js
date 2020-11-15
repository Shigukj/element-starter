import Vue from 'vue'
import ElementUI from 'element-ui'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'
import  home from './view/home'

Vue.use(ElementUI);
Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/home',
            name:'index',
            component:home
        },
        {   //路由重定向
            path:'*',
            name:'index',
            redirect:'/home'
        }
    ]
})

export default router