<template>
  <div id="app">
    <Header></Header>
    <!-- 返回顶部图标 -->
    <div class="scroll">
      <img src="./img/backTop.png" title="呜呼呼~" class="back" />
    </div>
    <div class="banner" :style="bgObj">
      <div class="toptitle">{{ toptitle }}</div>
    </div>

    <!-- 根据路由显示内容 -->
    <div class="container">
      <div class="container_left">
        <router-view  />
      </div>
      <!-- 右部导航栏 -->
      <div class="container_right">
        <rightSide/>
      </div>
    </div>

    <!-- 邮箱登录弹窗 -->
    <div v-if="mailLogin" class="mailBox">
      <mailLogin/>
    </div>
    
    <!-- 底部导航栏 -->
    <Footer></Footer>
  
  </div>
</template>

<script>
import { backTop, showbtn } from "@/assets/js/backtop.js";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import rightSide from './components/rightSide.vue'
import mailLogin from './components/mail.vue'

export default {
  components:{Header,Footer,rightSide,mailLogin},
  data() {
    return {
      // 顶部banner图片显示随机列表
      bgArr: [
        "http://www.fjtbkyc.net/bgImg/background1.jpg",
        "http://www.fjtbkyc.net/bgImg/background2.jpg",
        "http://www.fjtbkyc.net/bgImg/background3.jpg",
        "http://www.fjtbkyc.net/bgImg/background4.jpg",
        "http://www.fjtbkyc.net/bgImg/background5.jpg",
        "http://www.fjtbkyc.net/bgImg/background6.jpg",
        "http://www.fjtbkyc.net/bgImg/background7.jpg",
        "http://www.fjtbkyc.net/bgImg/background8.jpg",
      ],
      // 背景图片内容绑定样式
      bgObj: {
        backgroundImage: "url('http://www.fjtbkyc.net/bgImg/background1.jpg')",
        color: "red",
      }
    };
  },
  
  computed: {
    //利用vuex显示顶部标题
    toptitle() {
      return this.$store.state.toptitle;
    },
    mailLogin(){
      return this.$store.state.loginBox;
    }
  },

  methods: {
    //选择随机背景链接
    getBackground() {
      var num = Math.floor(Math.random() * this.bgArr.length);
      this.bgObj.backgroundImage = "url(" + this.bgArr[num] + ")";
    },
    //返回顶部css
    conss() {
      showbtn();
    },
    //返回顶部
    backtop() {
      backTop();
    },
 
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  created() {
    this.getBackground();
  },
  mounted() {
    window.addEventListener("scroll", this.conss);
    var img = document.querySelector(".back");
    img.addEventListener("click", this.backtop);
  },
};
</script>


<style lang="less" scoped>
@import "./assets/css/backtop.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.banner {
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  .toptitle {
    width: 100%;
    line-height: 400px;
    text-align: center;
    font-size: 58px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 5px #b9b9b9;
    letter-spacing: 20px;
  }
}
#c {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}

//内容样式定义
.container{
 width: 65%;
 margin: 0 auto;
 display: flex;
 justify-content: space-around;
 &_left{
  width: 75%;
 }
 &_right{
  width: 24%;
 }
}
@media screen and (max-width: 950px) {
 .container_right,.scroll,.banner{
   display: none;
 }
 .container_left{
  width: 100%;
 }
 .container{
  width: 98%;
 }

}
</style>
