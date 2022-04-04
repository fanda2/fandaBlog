<template>
  <div id="app">
    <!-- 头部 -->
    <div class="nav">
      <div class="header">
        <div class="left noselect">
          <span class="blogname">{{ blogname }}</span>
          <span class="motto">{{ motto }}</span>
        </div>
        <div class="right">
          <router-link to="/"><div class="one">首页</div></router-link>
          <router-link  to="/practice"><div class="two">实战</div></router-link>
          <router-link  to="/file"><div class="three">归档</div></router-link>
          <router-link to="/chat"><div class="four">互动</div></router-link>
          <router-link to="/about"><div class="five">关于</div></router-link>
          <div class="more">更多</div>
        </div>
      </div>
    </div>
    <!-- 返回顶部图标 -->
    <div class="scroll">
				<img src="./img/backTop.png"  class="back"/>
		</div>
    <div class="banner"></div>
    <router-view />
    <div class="footer">
      <div class="top">本系统由vue + Node联合驱动</div>
      <div class="center">
        <span>COS对象存储</span><span></span><span>托管阿里云服务器</span>
      </div>
      <div class="bottom">
        <span>本站已正常运行：</span><span>{{ datatime }}</span>
      </div>
      <div class="copyright">
        <span>fandaBlog</span><span>这是一个新的开始</span>
      </div>
    </div>
  </div>
</template>

<script>
import {countDown} from './assets/js/time.js'
import {backTop,showbtn} from '@/assets/js/backtop.js'
 
export default {
  data() {
    return {
      blogname: "Another Dimension",
      motto: "你若安好，我便无恙", //便是这世界上最美好的时光
      datatime: "",
    };
  },
  methods: {
    goAdmin() {
      console.log("进入后台管理页面");
    },
    countTime(){
      var that=this;
      setInterval(function(){
        that.datatime=countDown()
      },1000);
    },
    conss(){
       showbtn();
    },
    backtop(){
      backTop();
    }
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
    // 一般在初始化页面完成后，再对dom节点进行相关操作,
  created(){
    this.countTime()
    
  },
  mounted(){
      window.addEventListener("scroll",this.conss); 
      var img=document.querySelector('.back');
      img.addEventListener('click',this.backtop);
  }
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
.nav {
  width: 100%;
  height: 50px;
  background: rgb(85, 171, 211);
}
//不允许选择
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.header {
  width: 65%;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left {
    line-height: 50px;
    width: 350px;
    // min-width: 300px;
    background: url("./img/logo.png") no-repeat center left;
    background-size: 15%;
    text-align: right;
    span {
      margin-left: 10px;
      color: #3c3c3c;
    }
    .blogname {
      font: normal bold 16px "Fantasy";
    }
    .motto {
      color: white;
      font-size: 14px;
    }
  }
  .right {
    line-height: 50px;
    width: 36%;
    min-width: 400px;
    display: flex;
    justify-content: space-between;
    div{
      width: 55px;
      padding:0 5px;
      line-height: 50px;
      color: white;
      text-align: right;
      
    }
    .one{
      background: url("./img/index.png") no-repeat center left;
       background-size: 30%;
    }
    .two{
      background: url("./img/protact.png") no-repeat center left;
       background-size: 30%;
    }
    .three{
      background: url("./img/text.png") no-repeat center left;
       background-size: 30%;
    }
    .four{
      background: url("./img/hudong.png") no-repeat center left;
       background-size: 30%;
    }
    .five{
      background: url("./img/about.png") no-repeat center left;
       background-size: 30%;
    }
    .more{
      cursor: pointer;
      background: url("./img/more.png") no-repeat center left;
       background-size: 30%;
    }
    .more:hover::after{
      contain: "";
      width: 60px;
      height: 100px;
      background: orange;
      position: absolute;
      bottom: 100px;
    }
  }
  
}

.banner {
  width: 100%;
  height: 300px;
  background: url("./img/banner.jpg") no-repeat;
  background-size: cover;
}
.footer {
  text-align: center;
  width: 100%;
  height: 100px;
  background: orange;
  padding-bottom: 10px;
  div {
    line-height: 25px;
  }
}
</style>
