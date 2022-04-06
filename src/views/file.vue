<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="top">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F08%2F20200508112432_zxxgi.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845555&t=93e63d4ed9851212e8d795f2f0598b8e"
            alt=""
          />
        </div>
        <div class="music">
          <aplayer
            autoplay
            :music="{
              title: '云烟成雨',
              author: '房东的猫',
              url: 'http://wew.fjtbkyc.net/images/yunyanhcengyu.mp3',
              pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp462318665.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651848252&t=cc18494010017817b32054b35685d79a',
              lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
            }"
          >
          </aplayer>
        </div>
        <div class="time_line">
          <Timeline :timeLine="time_line" />
        </div>
        <div class="onload">
          <Col class="demo-spin-col" span="8">
            <Spin fix>
              <Icon
                type="ios-loading"
                size="18"
                class="demo-spin-icon-load"
              ></Icon>
              <span>不断学习中......</span>
            </Spin>
          </Col>
        </div>
      </div>
      <div class="rside">
        <Message />
        <IpAbout />
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/myMessage.vue";
import IpAbout from "@/components/ipAbout.vue";
import Timeline from "@/components/timeLine.vue";
import Aplayer from "vue-aplayer";
export default {
  components: {
    Message,
    IpAbout,
    Timeline,
    Aplayer,
  },
  data() {
    return {
      time_line: [
        {
          time: "2022/4/2",
          color: "",
          content:
            "开始计划设计,开始设计界面和数据库，开始计划设计,开始设计界面和数据库，开始计划设计,开始设计界面和数据库",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F08%2F20200508112432_zxxgi.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845555&t=93e63d4ed9851212e8d795f2f0598b8e",
        },
        {
          time: "2022/4/4",
          color: "",
          content: "基本完成框架搭建",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F30%2F20200530210748_lwerm.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845524&t=991759cc465886535a8c9ba926e2fbb8",
        },
        {
          time: "2022/4/5",
          content: "添加时间线",
          color: "",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F08%2F20200608123749_jpihk.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845524&t=665ac5d2264b890fb7a7807b078ef170",
        },
        {
          time: "2022/4/5",
          color: "",
          content: "添加时间线",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1-tt.byteimg.com%2Forigin%2Fpgc-image%2Fa0fb108768554e918084fde24529ad99%3Ffrom%3Dpc&refer=http%3A%2F%2Fp1-tt.byteimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845524&t=e8d16bc4846a3ef2882bb106558a56c0",
        },
        {
          time: "2022/4/5",
          color: "",
          content: "添加时间线",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F30%2F20200530210748_lwerm.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845524&t=991759cc465886535a8c9ba926e2fbb8",
        },
        {
          time: "2022/4/5",
          color: "",
          content: "添加时间线",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F30%2F20200530210748_lwerm.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845524&t=991759cc465886535a8c9ba926e2fbb8",
        },
      ],
    };
  },
  methods: {
    //重新加载画布
    // mycanvas(){
    //   window_resize()
    // }
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  // mounted(){
  // }
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
  margin: 10px auto;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  display: flex;
  justify-content: space-between;
}
.content {
  display: block;
  width: 77%;
  .top {
    width: 100%;
    height: 150px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .music {
    width: 100%;
    margin: 5px auto;
    height: 140px;
    padding: 10PX 0;
    // background: skyblue;
  }
  .time_line {
    width: 98%;
    margin: 30px auto;
    // text-align: center;
  }
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.rside {
  width: 23%;
}
.onload {
  width: 100%;
  text-align: center;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 50px;
  margin: 0 auto;
  // text-align: center;
}
</style>
