<template>
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
      <div class="introduce">
        <mavon-editor
          :value="value"
          defaultOpen="preview"
          :boxShadow="false"
          style="z-index: 1; height: 100vh"
          :editable="false"
          :subfield="false"
          :toolbarsFlag="false"
        >
        </mavon-editor>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
export default {
  components: {
    Clock,
  },
  data() {
    return {
      shuoshuo:
        "Hi,这里是梵大的博客，为了练习学到的东西,做了一个小站,希望大家多多建议，我会不断完善！",
      value: "",
    };
  },
  methods: {
    //获取文章信息
    async getpost() {
      var result = await this.$http.get("/post/post_byId", {
        params: {
          postid: 6,
        },
      });
      if (result.status == 200) {
        this.value = result.data.row2.content;
      } else {
        this.$Message.error("请检查网络或稍后重试");
      }
    },
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  created() {
    this.getpost();
  },
  mounted() {
    this.$store.state.toptitle = "关 于";
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  min-height: 900px;
  background: rgb(255, 255, 255);
  margin: 10px auto;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
}
.content {
  display: block;
  border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
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
    min-height: 100px;
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
  margin-left: 10px;
  border-radius: 10px;
}
.introduce {
  margin-bottom: 10px;
}
</style>
