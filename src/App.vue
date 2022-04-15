<template>
  <div id="app">
    <!-- 头部 -->
    <div class="nav">
      <div class="header">
        <div class="left noselect">
          <span class="blogname">{{ blogname }}</span>
          <span class="motto">{{ motto }}</span>
        </div>
        <div class="right" >
          <router-link to="/"><div ><i class="iconfont">&#xe609;</i> 首页</div></router-link >
          <router-link to="/practice"><div  ><i class="iconfont">&#xe660;</i> 实战</div></router-link >
          <router-link to="/file"><div ><i class="iconfont">&#xe62f;</i> 归档</div></router-link>
          <router-link to="/chat"><div ><i class="iconfont">&#xe62b;</i> 互动</div></router-link>
          <router-link to="/about"><div ><i class="iconfont"  >&#xe659;</i> 关于</div></router-link>
          <div class="more">
            <i class="iconfont">&#xe771;</i> <span> 更多</span>
            <div class="box">
              <ul>
                <router-link to="/space"> <li  ><i class="iconfont">&#xe619;</i> 空间</li></router-link>
                <router-link to="/photo"><li  ><i class="iconfont">&#xe7ff;</i> 图库</li></router-link>
                <router-link to="/todolist"
                  ><li  ><i class="iconfont">&#xe609;</i> TodoList</li></router-link
                >
                <li @click="go_qqemil" ><i class="iconfont">&#xe65e;</i> {{ loginbtn }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login" v-show="loginshow" id="box">
      <div class="login_title">QQ邮箱登录</div>
      <div class="form"></div>
    </div>
    <!-- 返回顶部图标 -->
    <div class="scroll">
      <img src="./img/backTop.png" title="呜呼呼~" class="back" />
    </div>
    <div class="banner">
      <div class="toptitle">{{ toptitle }}</div>
    </div>
    <!-- 防止路由内容 -->
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
import { countDown } from "./assets/js/time.js";
import { backTop, showbtn } from "@/assets/js/backtop.js";
export default {
  data() {
    return {
      blogname: "Another Dimension",
      motto: "你若安好，我便无恙", //便是这世界上最美好的时光
      datatime: "",
      timer: "",
      islogin: false,
      loginshow: false, //用于控制登录框是否显示
    };
  },
  computed: {
    toptitle() {
      return this.$store.state.toptitle;
    },
    loginbtn() {
      if (this.islogin) {
        return "退出登录";
      } else {
        return "qq邮箱登录";
      }
    },
  },
  methods: {
    goAdmin() {
      console.log("进入后台管理页面");
    },
    countTime() {
      var that = this;
      this.timer = setInterval(function () {
        that.datatime = countDown();
      }, 1000);
    },
    //返回顶部css
    conss() {
      showbtn();
    },
    //返回顶部
    backtop() {
      backTop();
    },
    //展示登录页面
    go_qqemil() {
      this.mycanvas()  //重新加载背景
      this.loginshow = true;
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
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  created() {
    this.countTime();
  },
  mounted() {
    window.addEventListener("scroll", this.conss);
    var img = document.querySelector(".back");
    img.addEventListener("click", this.backtop);
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
    div {
      width: 66px;
      padding: 0 5px;
      line-height: 50px;
      color: white;
    }
    .more {
      cursor: pointer;
      background-size: 30%;
      position: relative;
      .box {
        width: 120px;
        height: 0px;
        position: absolute;
        top: 50px;
        left: -10px;
        background: rgb(85, 171, 211);
        transition: height 0.5s;
        // display: none;
        overflow: hidden;
        ul li {
          list-style: none;
          line-height: 40px;
          padding-left: 20px;
          color: white;
        }

      }
      .box li:hover{
        color: rgb(245, 112, 35);
      }
    }
    .more:hover .box {
      height: 160px;
      // display: block;
    }
  }
}
.right div:hover{
   color: rgb(245, 112, 35);
}
.back {
  cursor: pointer;
}
.login {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -150px 0px 0px -200px;
  background: orchid;
  border-radius: 10px;
  animation: show-box 0.5s ease;
  z-index: 99;
  .login_title {
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: white;
    letter-spacing: 2px;
  }
  .form {
    width: 90%;
    margin: 0 auto;
  }
}
@keyframes show-box {
  from {
    transform: scale(0.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.banner {
  width: 100%;
  height: 400px;
  background: url(https://api.ixiaowai.cn/gqapi/gqapi.php) no-repeat;
  background-size: cover;
}
.footer {
  text-align: center;
  // width: 100%;
  height: 100px;
  background: rgb(199, 235, 238);
  border-top: 1px solid #ccc;
  padding-bottom: 10px;
  div {
    line-height: 25px;
  }
}
#c {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
// 顶部标题文字
.toptitle {
  width: 100%;
  line-height: 400px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  letter-spacing: 20px;
}
.iconfont{
  font-size: 12px;
}
ul .iconfont{
  font-size: 16px;
}
</style>
