<template>
    <div class="main">
    <div class="content">
      <div
        v-for="(item, i) in postmsg"
        :key="i"
        @click="godetial(item.post_id)"
      >
        <HelloItem :postmsg="item" />
      </div>

      <div class="pagenum">
        <Page
          :total="pagetotal"
          show-elevator
          @on-change="pagechange"
          :page-size="5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HelloItem from "@/components/HelloItem.vue";
export default {
    //  name: 'Home',
    components: {
    HelloItem,
  },
   data() {
    return {
      postmsg: [],
      pagetotal: 0, //文章总数
      query: {
        limit: 5,
        page: 1,
      },
    };
  },
  methods: {
     //获取文章列表破
     async get_postlist() {
      var result = await this.$http("/post/get_post", {
        params: {
          limit: this.query.limit,
          page: this.query.page,
        },
      });
      if (result.status == 200) {
        this.$Message.success("加载成功~");
        this.postmsg = result.data.row;
        this.pagetotal = result.data.total;
      } else {
        this.$Message.error("请检查网络或稍后重试");
      }
    },
       // 页码改变的回调，返回改变后的页码
       pagechange(e) {
      this.query.page = e;
      this.get_postlist();
    },
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  mounted(){
    this.$store.state.toptitle="实 战";
    this.get_postlist();
  }
}
</script>

<style lang="less" scoped>.main {
  width: 100%;
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
}
.content {
  width: 100%;
  display: block;
  border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .pagenum {
    width: 100%;
    margin: 50px auto;
    text-align: center;
  }
}
.rside {
  width: 23%;
  margin-left: 10px;
  border-radius: 10px;
}
</style>