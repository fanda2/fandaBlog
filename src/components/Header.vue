<template>
  <!-- 头部 -->
  <div class="nav">
    <div class="header">
      <div class="left noselect">
        <div class="blogname">{{ blogname }}</div>
        <div class="motto">{{ motto }}</div>
      </div>
      <div class="right">
        <router-link to="/home" active-class="active"
          ><div><i class="iconfont">&#xe609;</i> 首页</div></router-link
        >
        <router-link to="/practice" active-class="active"
          ><div><i class="iconfont">&#xe660;</i> 实战</div></router-link
        >
        <router-link to="/file" active-class="active"
          ><div><i class="iconfont">&#xe62f;</i> 归档</div></router-link
        >
        <router-link to="/chat" active-class="active"
          ><div><i class="iconfont">&#xe62b;</i> 互动</div></router-link
        >
        <router-link to="/about" active-class="active"
          ><div><i class="iconfont">&#xe659;</i> 关于</div></router-link
        >
        <div class="more">
          <i class="iconfont">&#xe771;</i> <span> 更多</span>
          <div class="box">
            <ul>
              <router-link to="/space" active-class="active">
                <li><i class="iconfont">&#xe619;</i> 空间</li></router-link
              >
              <router-link to="/photo" active-class="active"
                ><li><i class="iconfont">&#xe7ff;</i> 图库</li></router-link
              >
              <router-link to="/todolist" active-class="active"
                ><li><i class="iconfont">&#xe609;</i> TodoList</li></router-link
              >
              <li @click="go_qqemil">
                <i class="iconfont">&#xe65e;</i> {{ loginbtn }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right_menu">
        <img src="../img/menu.png" alt="" @click="isShowmenu = !isShowmenu" />
        <div
          class="right_menu-phone"
          v-show="isShowmenu"
          @click="showmenu"
        >
          <router-link to="/home" active-class="active"
            ><div><i class="iconfont">&#xe609;</i> 首页</div></router-link
          >
          <router-link to="/practice" active-class="active"
            ><div><i class="iconfont">&#xe660;</i> 实战</div></router-link
          >
          <router-link to="/file" active-class="active"
            ><div><i class="iconfont">&#xe62f;</i> 归档</div></router-link
          >
          <router-link to="/chat" active-class="active"
            ><div><i class="iconfont">&#xe62b;</i> 互动</div></router-link
          >
          <router-link to="/about" active-class="active"
            ><div><i class="iconfont">&#xe659;</i> 关于</div></router-link
          >

          <router-link to="/space" active-class="active">
            <div><i class="iconfont">&#xe619;</i> 空间</div></router-link
          >
          <router-link to="/photo" active-class="active"
            ><div><i class="iconfont">&#xe7ff;</i> 图库</div></router-link
          >
          <router-link to="/todolist" active-class="active"
            ><div><i class="iconfont">&#xe609;</i> TodoList</div></router-link
          >
          <div @click="go_qqemil" class="mailLogin">
            <i class="iconfont">&#xe65e;</i> {{ loginbtn }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogname: "Another Dimension",
      motto: "你若安好，我便无恙", //便是这世界上最美好的时光
      islogin: false,
      loginshow: false, //用于控制登录框是否显示
      isShowmenu: false, //是否展示菜单
      // navTitle: [
      //   {
      //     id: "001",
      //     title: "首页",
      //     fonticon: "&#xe609;",
      //     topage: "/home",
      //   },
      // ],
    };
  },
  methods: {
    goAdmin() {
      console.log("进入后台管理页面");
    },
    //展示登录页面
    go_qqemil() {
      this.$store.commit('ChangeStatus',true)
    },
    showmenu() {
      this.isShowmenu=false  
    }
  },
  computed: {
    loginbtn() {
      if (this.islogin) {
        return "退出登录";
      } else {
        return "qq邮箱登录";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 68%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left {
    line-height: 50px;
    width: 350px;
    // min-width: 300px;
    background: url("../img/logo.png") no-repeat center left;
    background-size: 40px;
    display: flex;
    justify-content: flex-start;
    span {
      margin-left: 10px;
      color: #3c3c3c;
    }
    .blogname {
      font: normal bold 16px "Fantasy";
      padding-left: 50px;
      line-height: 50px;
    }
    .motto {
      color: white;
      font-size: 14px;
      padding-left: 10px;
      line-height: blogname;
    }
  }
  //按钮被激活的样式
  .active div {
    color: rgb(194, 69, 194) !important;
    font-size: 16px;
  }
  .right_menu {
    display: none;
    line-height: 50px;
    margin-right: 1%;
    width: 40px;
    z-index: 99;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    &-phone {
      position: absolute;
      border-radius: 5px;
      box-shadow: 3px 3px 5px #a0a0a0;
      top: 40px;
      right: 10px;
      width: 100px;
      background: rgb(255, 255, 255);
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
        //按钮被激活的样式
        .active li {
          color: rgb(194, 69, 194) !important;
          font-size: 16px;
        }
      }
      .box li:hover {
        color: rgb(245, 112, 35);
        font-size: 16px;
      }
    }
    .more:hover .box {
      height: 160px;
    }
  }
}
.mailLogin {
  cursor: pointer;
  user-select: none;
}
.right div:hover {
  color: rgb(245, 112, 35);
  font-size: 16px;
}
.back {
  cursor: pointer;
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

.iconfont {
  font-size: 12px;
}
ul .iconfont {
  font-size: 16px;
}

//媒体查询,当宽度小于1400px时候
@media screen and (max-width: 1400px) {
  .header {
    .motto {
      display: none;
    }
  }
}

//媒体查询，当宽度小于1080px时候，则为手机端显示效果
@media screen and (max-width: 950px) {
  .header {
    width: 98%;
    .left {
      background: url("");
      .blogname {
        padding-left: 0px;
      }
    }
    .right {
      display: none;
    }
    .right_menu {
      display: block;
    }
  }
}
</style>
