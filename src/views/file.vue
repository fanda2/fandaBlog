<template>
    <div class="main">
      <div class="content">
        <div class="top">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F08%2F20200508112432_zxxgi.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651845555&t=93e63d4ed9851212e8d795f2f0598b8e"
            alt=""
          />
          <div class="conttext">
            <div class="moto">{{ context }}</div>
            <div class="author">—— {{author}}</div>
          </div>
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
    </div>
</template>
<script>
import Timeline from "@/components/timeLine.vue";
import Aplayer from "vue-aplayer";
import axios from 'axios'
export default {
  components: {
    Timeline,
    Aplayer,
  },
  data() {
    return {
      query: {
        limit: 10,
        page: 1,
      },
      time_line: [],
      context: "", //变化的语录
      author:"" //语录出处
    };
  },
  methods: {
    // 获取时间线的值
    async get_Time() {
      var result = await this.$http.get("/line/get_timeline", {
        params: {
          limit: this.query.limit,
          page: this.query.page,
        },
      });
      if (result.status == 200) {
        this.time_line = result.data.row;
      } else {
        this.$Message.error("请检查网络或稍后重试");
      }
    },
    //使用代理服务的方法解决跨域
    async get_context() {
      var result=await axios.get('https://saying.api.azwcl.com/saying/get')
     if(result.code==200)
     {
       this.context=result.data.content
       this.author=result.data.author
     }
     else{
       console.warn("查询每日一言出错了");
     }
    },
  },

  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  mounted(){
     this.$store.state.toptitle="归 档"
  },
  created() {
    this.get_Time();
    this.get_context()
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
  justify-content: space-between;
   border-radius: 10px;
}
.content {
  display: block;
   border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .top {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
   .conttext{
     height: 50px;
     width: 98%;
     margin-left: 1%;
     font-size: 14px;
     text-align: center;
    position: absolute;
    color: white;
    top: 50% ;
    transform: translateY(-50%);
    left: 0;
    z-index: 2;
    .author{
      width: 80%;
      margin: 0 auto;
      text-align: right;
    }
}
  }
  .music {
    width: 100%;
    margin: 5px auto;
    height: 140px;
    padding: 10px 0;
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
   margin-left: 10px;
  border-radius: 10px;
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
