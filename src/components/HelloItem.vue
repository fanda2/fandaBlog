<template>
  <div class="itemcontainer">
    <div class="top">
      <div class="title">{{ postmsg.title }}</div>
      <div class="submsg">
        <div class="h_one">{{ postmsg.stime }}</div>
        <div class="h_two">{{ postmsg.seenum }}</div>
        <div class="h_three">{{ postmsg.remark }}</div>
        <!-- <img src="../img/data.png"><span></span>
        <img src="../img/hot.png"><span></span>
        <img src="../img/remark.png"><span></span> -->
      </div>
    </div>
    <div class="center">
      <img :src="postmsg.cover" />
    </div>
    <div class="bottom">
      <span>{{ postmsg.description }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloItem",
  //父组件向子组件传递对象
  props: {
    postmsg: {
      type: Object,
      default() {
        return {
          postid: this.postmsg.id,
        };
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.itemcontainer {
  width: 98%;
  height: 350px;
  margin: 10px auto;
  // background: skyblue;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #ccc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  div {
    width: 98%;
    margin: 0 auto;
  }
  .title {
    height: 40px;
    font: normal bold 24px/50px "黑体";
  }
  .submsg {
    width: 50%;
    line-height: 30px;
    margin-left:0px ;
    display: flex;
    justify-content: flex-start;
    div{
      line-height: 30px;
      text-align: center;
    };
    div:first-child{
      width: 50%;
      background: url("../img/data.png") no-repeat center left;
      background-size: 10%;
    };
    .h_two{
      width: 25%;
        background: url("../img/hot.png") no-repeat center left;
      background-size: 20%;
    };
    div:last-child{
        width: 25%;
       background: url("../img/remark.png") no-repeat center left;
      background-size: 20%;
    }
  }
  .center {
    height: 240px;
    overflow: hidden;
    img {
      // height: 200px;
      width: 100%;
      transition: all 0.5s;
    }
  }
  .center img:hover {
    transform: scale(110%);
  }
  .bottom {
    line-height: 40px;
    span {
      font-size: 14px;
    }
  }
}
</style>
>
