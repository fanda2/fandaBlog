<template>
<div class="c_main">
      <div class="clock">
    <div class="hour">
      <div id="hr" class="hr"></div>
    </div>
    <div class="min">
      <div id="mn" class="mn"></div>
    </div>
    <div class="sec">
      <div id="sc" class="sc"></div>
    </div>
  </div>
</div>
</template>
<script>
import {clock} from '../assets/js/time.js'
export default {
   data(){
       return{

       }
   },
   methods:{
       onclock(){
            clock();
       }
   },
   //页面构建完成后加载，一般用于插件渲染
   mounted(){
          this.onclock()
   },
   //创建页面前的预加载，一般用于获取数据
   created(){
    //    this.onclock()
   }
};
</script>

<style lang="less" scoped>
.c_main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background: #25363f;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(255, 255, 255, 0.3),
    inset 0 15px 15px rgba(255, 255, 255, 0.3);
}
.clock {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../img/time.png);
  background-size: cover;
  border: 2px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(255, 255, 255, 0.3),
    inset 0 15px 15px rgba(255, 255, 255, 0.3);
}
.clock::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}
.clock .hour,
.hr {
  width: 100px;
  height: 100px;
}
.clock .min,
.mn {
  width: 150px;
  height: 150px;
}
.clock .sec,
.sc {
  width: 180px;
  height: 180px;
}
.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  border-radius: 50%;
}
.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 60px;
  background: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: #fff;
  z-index: 20;
  border-radius: 6px 6px 0 0;
}
.sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 120px;
  background: #fff;
  z-index: 30;
  border-radius: 6px 6px 0 0;
}
</style>
>
