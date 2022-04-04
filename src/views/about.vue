<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="top">
          <img src="../img/s3.jpg" alt="" />
        </div>
        <div class="info">
          <div class="avator">
            <img src="../img/avator.jpg" alt="" />
          </div>
          <div class="msg">
            <div class="nickname">fandaBlog</div>
            <div class="sex"><span>四川 宜宾</span> | <span>男</span></div>
            <div class="shuoshuo">{{ shuoshuo }}</div>
          </div>
        </div>
        <div class="clock">
          <Clock />
        </div>
         <div>
          <mavon-editor
            :value="itemDes"
            defaultOpen="preview"
            :boxShadow="false"
            style="z-index: 1; height: 50vh"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
          >
          </mavon-editor>
        </div>
      </div>
      <div class="rside">
        <Message />
        <IpAbout />
        <myProgress />
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import Message from "@/components/myMessage.vue";
import IpAbout from "@/components/ipAbout.vue";
import myProgress from '../components/Progress.vue'
export default {
  components: {
    Clock,
     Message,
    IpAbout,
    myProgress
  },
  data() {
    return {
      shuoshuo:
        "Hi,这里是梵大的博客，为了练习学到的东西,做了一个小站,希望大家多多建议，我会不断完善！",
       itemDes:
      "# github仓库使用 ## 一、仓库建立 1. 在登录后进入仓库创建界面，填写仓库名称和描述即可创建仓库![创建仓库](https://aiphoto-1305314152.cos.ap-chengdu.myqcloud.com/Internet%2Fgithub.png)2. 仓库主页的功能介绍- 修改项目介绍，点击edit",
    };
  },
  methods: {},
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.main {
   width: 65%;
  min-width: 900px;
  min-height: 1800px;
    background: white;
  border-radius: 5px;
  margin: 10px auto;
  border: 1px solid rgba(206, 206, 206, 0.8);
  display: flex;
  justify-content: space-between;
}
.content {
  display: block;
  width: 77%;
  .top {
    width: 100%;
    height: 260px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    width: 99%;
    margin: 0 auto;
    border-bottom: 1px solid olivedrab;
    height: 100px;
    display: flex;
    .avator {
      width: 25%;
      position: relative;
      img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        position: absolute;
        top: -20px;
        left: 50%;
        margin-left: -50px;
      }
    }
    .msg {
      width: 75%;
      div {
        line-height: 33px;
        font-size: 16px;
      }
      .sex img {
        width: 20px;
      }
    }
  }
}
.clock {
  width: 98%;
  height: 210px;
  padding: 10px 0;
  text-align: center;
}
.rside {
  width: 23%;
}
</style>
