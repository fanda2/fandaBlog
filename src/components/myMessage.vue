<template>
  <div class="my_msg">
    <img class="avator" src="../img/avator.jpg" alt="头像" />
    <div class="my_nickname">
      {{ myinfo.nickname }}
    </div>
    <div>{{ myinfo.major }}</div>
    <div class="address"><span>{{ myinfo.address }}</span></div>
    <div>前端：vue + view UI </div>
    <div>后端：Node.js+MySQL</div>
    <div class="mail"><span>3055093273@qq.com</span></div>
    <div class="interaction">
        <H3>社交账号</H3>
        <div class="link">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myMessage",
  props: {},
  created() {
    this.getMyinfo();
  },
  data() {
    return {
      myinfo: {
        avator: "../img/avator.jpg",
        nickname: "fanda",
        major: "软件工程",
        address:"四川 宜宾 ",

      },
    };
  },
  methods: {
    getMyinfo() {
      console.log("获取用户信息");
    },
  },
};
</script>

<style lang="less" scoped>
.my_msg {
  width: 98%;
  min-width: 202px;
  height: 450px;
  margin: 10px auto;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 2px 3px #ccc;
  border: 1px solid #ccc;
  div{
      line-height: 30px;
      font-size: 14px;
      color: #3c3c3c;
  }
  .address{
        width: 50%;
      text-align: center;
      margin: 0 auto;
      padding: 0 20px;
      background: url("../img/address.png") no-repeat center left;
      background-size: 16%;
  }
  .mail {
      width: 80%;
      text-align: center;
      margin: 0 auto;
      padding: 0 20px;
      background: url("../img/email.png") no-repeat center left;
      background-size: 10%;
  }
  h3{
      border-bottom: 1px solid #ccc;
  }
}
.avator {
  margin-top: 10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 3px 3px 4px saddlebrown;
  transition: all .5s;
}
.avator:hover{
    transform: rotate(360deg);
}
.link{
    width: 96%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    div{
        width:45%;
        height: 80px;
    }
    .left{
        background: url("../img/qq.png") no-repeat center;
        background-size: 30%;
        position: relative;

    }
    .right{
        background: url("../img/wechat.png") no-repeat center;
          background-size: 30%;
           position: relative;
    }
    .left:hover::before{
        content: "";
        display: block;
        width: 90px;
        height: 90px;
        background: url("../img/code.png") no-repeat center;
        background-size: 98%;
        position: absolute;
        top:-70px;
        left:10px;
    }
      .right:hover::before{
        content: "<h1>111<h1/>";
         display: block;
        width: 90px;
        height: 90px;
        background: pink;
        background: url("../img/code.png") no-repeat center;
        background-size: 98%;
        position: absolute;
        top:-70px;
        left:10px;
        // display: none;
    }
}
</style>
