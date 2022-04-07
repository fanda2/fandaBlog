<template>
  <div class="f_content">
      <div class="left">
          <div class="name">
              {{linkmsg.webname}}
          </div>
          <div class="des text">
              {{linkmsg.description}}
          </div>
      </div>
      <div class="right">
          <img :src="linkmsg.logo" alt="头像">
      </div>
  </div>
</template>

<script>
export default {
  name:"friendLink",
 //父组件向子组件传递对象
  props: {
    linkmsg: {
      type: Object,
      default() {
        return {

        };
      },
    },
  },
}
</script>

<style lang="less" scoped>
.f_content{
    width: 100%;
    height: 100px;
    border:1px solid rgb(228, 228, 228);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    .left{
        z-index: 2;
        width: 60%;
        color: #3c3c3c;
        .name,.des{
            width: 90%;
            margin: 0 auto;
            line-height: 50px;
        }
        .name{
            font-weight: bolder;
            font-size: 18px;
            color: rgb(26, 169, 212);
            border-bottom: 2px dashed rgb(197, 197, 197);
        }
        .des{
             font-size: 10px;
        }
    }
    .right{
        z-index: 2;
        width: 100px;
        // overflow: hidden;
        margin: 10px;
        width: 80px;
        height: 80px;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            transition: all 1s;
        }
    }
}
.f_content::before{
    background-image: linear-gradient(-225deg, rgb(44, 216, 213) 0%, rgb(197, 193, 255) 56%, rgb(255, 186, 195) 100%);
    content: "";
    width: 100%;
    height: 0%;
    // background: #1890ff;
    transform: translate(-50%, -50%) rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transition: all 0.3s linear 0s;
}
.f_content:hover::before{
    height: 300%;
}
::selection {
    color: #fff;
    background: #1890ff;
}
.f_content:hover{
    box-shadow: 4px 4px 3px #bae1f8,-4px -4px 3px #bae1f8;
}
.f_content:hover .right img{
    transform: rotate(360deg);
}
.text{
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
word-wrap: break-word;
white-space: normal !important;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
}
</style>