// 入口文件
// 导入Vue
import Vue from 'vue'

import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)


// 导入MUI的样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

// 导入app.vue
import app from './App.vue'



var vm = new Vue({
    el:"#app",
    render:e=>e(app),
    
})