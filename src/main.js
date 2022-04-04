import Vue from 'vue'
import router from "./router";
import axios from "axios";
import App from './App.vue'
import './assets/css/base.css'
import VueLazyLoad from 'vue-lazyload'
// markdown样式
import 'github-markdown-css'
import ViewUI from "view-design"
import 'view-design/dist/styles/iview.css'
//编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
new Vue({
    'el': '#main',
    data() {
        return { value: '' }
    }
})

Vue.use(ViewUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

// 请求拦截器,其余请求头加上token
axios.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (config.url == "/user/login") {
        return config;
    } else {
        config.headers.Authorization = token;
    }

    return config;
});


Vue.use(VueLazyLoad, {
    attempt: 1, // 尝试加载图片的数量
    error: './static/error.png', // 加载错误图标
    loading: './static/loading.gif', // 加载图标
    listenEvents: ['scroll'], // 滚动监听
})

// axios.defaults.baseURL = "http://8.142.81.85:8080";



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')