<template>
    <div class="main">
      <div class="content">
        <WaterFall/>
      </div>
    </div>
</template>

<script>
import WaterFall from '@/components/waterFall.vue'
export default {
  components:{
    WaterFall,
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
.main {
  width: 100%;
  min-height: 900px;
  margin: 10px auto;
  background: white;
  display: flex;
   border-radius: 10px;
  justify-content: space-between;
}
.content{
  display: block;
  width: 100%;
  overflow: hidden;
   border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
  .pagenum{
    width: 100%;
    margin:50px auto;
    text-align: center;
  }
}
</style>