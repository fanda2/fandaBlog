<template>
   <div class="container">
    <div class="main">
      <div class="content">
         空间界面
         <clock />
      </div>
      <div class="rside"></div>
    </div>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
export default {
  components:{
    Clock
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
  width: 1200px;
  min-height: 1800px;
  margin: 10px auto;
  // background: palevioletred;
  border: 1px solid rgba(206, 206, 206,.8);
  display: flex;
  justify-content: space-between;
}
.content{
  display: block;
  width: 77%;
  background: skyblue;
}
.rside{
  width: 23%;
  background: orange;
}
</style>