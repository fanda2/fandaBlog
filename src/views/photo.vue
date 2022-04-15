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
import WaterFall from '@/components/waterFall.vue'
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
  mounted(){
    this.$store.state.toptitle="相 册"
  }
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
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
   border-radius: 10px;
  justify-content: space-between;
}
.content{
  display: block;
  width: 77%;
   border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .pagenum{
    width: 100%;
    margin:50px auto;
    text-align: center;
  }
}
.rside{
  width: 23%;
   margin-left: 10px;
  border-radius: 10px;
}

</style>