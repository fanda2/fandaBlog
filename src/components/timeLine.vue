<template>
  <div class="t_content">
    <div class="litem" v-for="(item, i) in timeLine" :key="i">
      <div class="left" v-if="i%2==0">
        <div class="val">
            <div class="v_content">
                <div class="l_des text">{{item.content}}</div>
                <div class="l_cover"><img :src="item.imgurl" alt=""></div>
                <div class="l_time">{{item.time}}</div>
            </div>
        </div>
      </div>
      <div class="right" v-else>
        <div class="val2">
             <div class="v_content">
                 <div class="l_des text">{{item.content}}</div>
                <div class="l_cover"><img :src="item.imgurl" alt=""></div>
                <div class="l_time">{{item.time}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeLine",
  props: {
    timeLine: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.timeLine);
  },
};
</script>

<style lang="less" scoped>
.t_content {
  width: 100%;
  position: relative;
  .left {
    width: 98%;
    height: 250px;
    margin: 10px auto;
    position: relative;
  }
  .right{
       width: 98%;
        height: 250px;
    margin: 10px auto;
    position: relative;
  }
  .val {
    width: 50.33%;
    height: 250px;
    border-right: 3px solid rgb(72, 192, 207);
     position: absolute;
    left: 0;
  }
  .val::after{
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 5px solid rgb(247, 69, 99);
      position: absolute;
      right: 0;
      top: -15px;
      transform: translateX(60%);
  }
   .val2::after{
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 5px solid rgb(247, 69, 99);
      position: absolute;
      left: 0;
      top: -15px;
      transform: translateX(-60%);
  }
  .val2 {
    width: 50%;
    height: 250px;
    position: absolute;
    right: 0;

    border-left: 3px solid rgb(72, 192, 207);
  }
}
.v_content{
    width: 90%;
    margin: 0 auto;
    max-height: 250px;
    border-bottom: 2px solid rgb(90, 226, 113);
    .l_title{
        height: 40px;
    }
    .l_description{
        line-height: 70px;
    }
    .l_time{
        line-height: 20px;
    }
    .l_cover{
        max-height: 150px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
}
.text{
    display: -webkit-box;

overflow: hidden;

text-overflow: ellipsis;

word-wrap: break-word;

white-space: normal !important;

-webkit-line-clamp: 2;

-webkit-box-orient: vertical;
}
</style>
