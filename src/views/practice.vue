<template>
    <div class="main">
      <div class="content">
        
      </div>
    </div>
</template>

<script>
export default {
   data() {
    return {
    };
  },
  methods: {
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  mounted(){
    this.$store.state.toptitle="实 战"
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
   border-radius: 10px;
  border: 1px solid rgba(206, 206, 206, 0.8);
//   background: skyblue;
}
</style>