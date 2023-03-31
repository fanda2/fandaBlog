<template>
  <div class="footer">
    <div class="top">
      备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index"
        >蜀ICP备20013101号-1</a
      >
    </div>
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
</template>

<script>
import { countDown } from "../assets/js/time.js";
export default {
  data() {
    return {
      datatime: "",
      timer: "",
    };
  },
  created() {
    this.countTime();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    countTime() {
      var that = this;
      this.timer = setInterval(function () {
        that.datatime = countDown();
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  // width: 100%;
  height: 100px;
  background: rgb(241, 241, 241);
  border-top: 1px solid #ccc;
  margin-bottom: 5px;
  div {
    line-height: 25px;
  }
}
</style>
