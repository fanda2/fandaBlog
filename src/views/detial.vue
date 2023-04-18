<template>
  <div class="main">
    <div class="content">
      <div class="top">
        <div class="back">
          <div class="backindex">
            <a href="javascript: ;" @click="backindex">首页</a>
          </div>
          <div class="toptitle">/ {{ postmsg.title }}</div>
        </div>
        <div class="title">
          {{ postmsg.title }}
        </div>
        <div class="postmsg">
          <div class="h_one">{{ postmsg.stime }}</div>
          <div class="h_two">{{ postmsg.seenum }}</div>
          <div class="h_three">{{ postmsg.remark }}</div>
        </div>
        <div class="top_img">
          <img :src="postmsg.cover" alt="文章封面图" />
        </div>
        <div class="description">
          <div class="des"><span>description</span></div>
          <div class="descontent">
            {{ postmsg.description }}
          </div>
        </div>
      </div>
      <div class="des"><span>正文</span></div>
      <div class="post_content">
        <mavon-editor
          :value="postmsg.content"
          defaultOpen="preview"
          :boxShadow="false"
          style="z-index: 1"
          :editable="false"
          :subfield="false"
          :toolbarsFlag="false"
        >
        </mavon-editor>
      </div>
      <div class="remark"></div>
    </div>
  </div>
</template>

<script>
import { backTop } from "@/assets/js/backtop.js";
export default {
  name: "Detial",
  data() {
    return {
      postid: this.$route.query.postid,
      postmsg: "", // 保存文章信息
    };
  },
  methods: {
    //获取文章信息
    async getpost() {
      //返回顶部
      backTop();
      var result = await this.$http.get("/post/post_byId", {
        params: {
          postid: this.postid,
        },
      });
      if (result.status == 200) {
        this.postmsg = result.data.row2;
      } else {
        this.$Message.error("请检查网络或稍后重试");
      }
    },
    //返回首页
    backindex() {
      // this.$router.push("/");
      this.$router.go(-1); //返回上一层
    },
  },
  created() {
    this.getpost();
  },
  mounted() {
    this.$store.state.toptitle = "文章详情";
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
}
.content {
  overflow: auto;
  display: block;
  border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .pagenum {
    width: 100%;
    margin: 50px auto;
    text-align: center;
  }
  .top {
    width: 100%;
    .back {
      width: 100%;
      line-height: 50px;
      padding: 0 10px;
      box-sizing: border-box;
      background: rgb(212, 231, 226);
      font-size: 18px;
      display: flex;
      a {
        color: #259db3;
      }
      .backindex {
        width: 40px;
      }
      .toptitle {
        width: 60%;
      }
    }
    .title {
      width: 100%;
      text-align: center;
      line-height: 80px;
      // background: pink;
      color: #259db3;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .postmsg {
      width: 96%;
      margin: 0 auto;
      line-height: 60px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      div{
        padding-left: 24px;
      }
      div:first-child {
        background: url("../img/data.png") no-repeat center left;
        background-size: 20px;
      }
      .h_two {
        background: url("../img/hot.png") no-repeat center left;
        background-size: 20px;
        margin-left: 10px;
      }
      div:last-child {
        background: url("../img/remark.png") no-repeat center left;
        background-size: 20px;
        margin-left: 10px;
      }
    }
    .top_img {
      width: 98%;
      margin: 0 auto;
      // height: 240px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .description {
      width: 98%;
      margin: 0 auto;
      .descontent {
        font-size: 16px;
        color: #3c3c3c;
        margin: 20px 0;
      }
    }
  }
}
.des {
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #259db3;
  position: relative;
  span::before {
    content: "";
    height: 25px;
    display: block;
    width: 31%;
    // background: orange;
    position: absolute;
    top: 25px;
    left: 10px;
    border-top: 1px solid #ccc;
  }
  span::after {
    content: "";
    height: 25px;
    display: block;
    width: 31%;
    position: absolute;
    top: 25px;
    right: 10px;
    border-top: 1px solid #ccc;
  }
}
.post_content {
  min-height: 1000px;
  mavon-editor {
    min-height: 1000px !important;
  }
}

</style>
