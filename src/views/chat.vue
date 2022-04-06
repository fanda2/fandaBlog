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
export default {
  components:{
    Message,
    IpAbout
  },
   data() {
    return {
    };
  },
  methods: {
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,

}
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
  border: 1px solid rgba(206, 206, 206,.8);
  display: flex;
  justify-content: space-between;
}
.content{
  display: block;
  width: 77%;
}
.rside{
  width: 23%;
}
.top{
  height: 100px;
  text-align: center;
  h1{
    line-height: 70px;
  }
}
 .line {
    height: 4px;
    border: 0;
    background-color: #ddd;
    margin: 20px 0;
    background-image: repeating-linear-gradient(
      -45deg,
      #fff,
      #ff5777 5px,
      transparent 0,
      transparent 8px
    );
  }
</style>