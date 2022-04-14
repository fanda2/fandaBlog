<template>
   <div class="container">
    <div class="main">
      <div class="content">
        <WaterFall/>
      </div>
      <div class="rside">
           <Message  />
          <IpAbout />
      </div>
    </div>
  </div>
</template>

<script>
import WaterFall from '@/components/waterFall2.vue'
import Message from '@/components/myMessage.vue'
import IpAbout from '@/components/ipAbout.vue'
export default {
  components:{
    WaterFall,
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
  .pagenum{
    width: 100%;
    margin:50px auto;
    text-align: center;
  }
}
.rside{
  width: 23%;
}

</style>