<template>
  <div class="login" id="box">
      <div class="login_title">QQ邮箱登录</div>
      <div @click="hiddenBox" class="login_img">
        <img src="../img/delete.png" alt="">
      </div>
      <div class="form">

      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    //隐藏登录按钮
    hiddenBox(){
      this.$store.commit('ChangeStatus',false);
    }
  },
  mounted(){
    // window.addEventListener("click",function(){
    //   console.log(this)
    // });
    // var img = document.querySelector(".back");
    // img.addEventListener("click", this.backtop);
  }

}
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -150px 0px 0px -200px;
  background: rgb(255, 229, 172);
  border-radius: 10px;
  animation: show-box 0.5s ease;
  z-index: 99;
  .login_title {
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: white;
    letter-spacing: 2px;
  }
  .form {
    width: 90%;
    margin: 0 auto;
  }
  &_img{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    img{
      width: 20px;
      height: 20px;
    }
  }
}
</style>