<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div class="top">
          <h1>友情链接</h1>
          <p>（随机顺序排列，不分先后）</p>
        </div>
        <div class="line"></div>
        <div class="link">
          <div class="item" v-for="(item, i) in friendlink" :key="i">
            <friendLink :linkmsg="item" />
          </div>
        </div>
        <div class="line"></div>
        <div class="bottom">
          <center><h1>添加/修改友链信息</h1></center>
          <Form :model="formData" label-position="left" :label-width="100">
            <FormItem label="网站名称：">
              <Input v-model="formData.webname"></Input>
            </FormItem>
            <FormItem label="Logo链接：">
              <Input v-model="formData.logo"></Input>
            </FormItem>
            <FormItem label="网页链接：">
              <Input v-model="formData.link"></Input>
            </FormItem>
            <FormItem label="网页描述(限制15个字)">
              <Input v-model="formData.description"></Input>
            </FormItem>
          </Form>
          <Button type="success" long>提交新增友链申请</Button>
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
import friendLink from "@/components/friendLink.vue";
export default {
  components: {
    Message,
    IpAbout,
    friendLink,
  },
  data() {
    return {
      friendlink: [],
      formData: { webname: "", logo: "", link: "", description: "" },
    };
  },
  methods: {
    async LinkGet() {
      var result = await this.$http.get("/link/show_link", {
        params: {
          limit: 100,
          page: 1,
        },
      });
      if (result.status == 200) {
        this.friendlink = result.data.row;
      } else {
        this.$Message.warning("请检查网络或稍后重试");
      }
    },
  },
  created() {
    this.LinkGet();
  },

  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  mounted(){
    this.$store.state.toptitle="互 动"
  }
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
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
   border-radius: 10px;
  justify-content: space-between;
}
.content {
  display: block;
  width: 77%;
  border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
}
.rside {
  width: 23%;
  margin-left: 10px;
  border-radius: 10px;
}
.top {
  height: 100px;
  text-align: center;
  h1 {
    line-height: 70px;
  }
}
.link {
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  padding-bottom: 50px;
  .item {
    width: 30%;
    margin: 10px 1.6%;
  }
}
.bottom{
  // margin-top: 40px;
  width: 50%;
  margin: 100px auto;
  h1{
    line-height: 50px;
  }
}
.line {
  width: 98%;
  height: 4px;
  border: 0;
  background-color: #ddd;
  margin: 20px auto;
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #ff5777 5px,
    transparent 0,
    transparent 8px
  );
}
</style>
