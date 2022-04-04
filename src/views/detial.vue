<template>
  <div class="container">
    <div class="main">
      <div class="content">
        <div>
          <mavon-editor
            :value="itemDes"
            defaultOpen="preview"
            :boxShadow="false"
            style="z-index: 1; height: 50vh"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
          >
          </mavon-editor>
        </div>
        <div class="remark"></div>
      </div>
      <div class="rside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    itemDes:
      "# github仓库使用 ## 一、仓库建立 1. 在登录后进入仓库创建界面，填写仓库名称和描述即可创建仓库![创建仓库](https://aiphoto-1305314152.cos.ap-chengdu.myqcloud.com/Internet%2Fgithub.png)2. 仓库主页的功能介绍- 修改项目介绍，点击edit",
  }),
};
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
  border: 1px solid rgba(206, 206, 206, 0.8);
  display: flex;
  justify-content: space-between;
}
.content {
  display: block;
  width: 77%;
  .pagenum {
    width: 100%;
    margin: 50px auto;
    text-align: center;
  }
}
.rside {
  width: 23%;
}
</style>
