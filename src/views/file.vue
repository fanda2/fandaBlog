<template>
   <div class="container">
    <div class="main">
      <div class="content">
        <div class="top"></div>
        <div class="music"></div>
      <div class="time_line">
         <Timeline>
        <TimelineItem>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
    </Timeline>
      </div>
      </div>
      <div class="rside">
        <Message/>
         <IpAbout/>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/myMessage.vue'
import IpAbout from '@/components/ipAbout.vue'
export default {

  components:{
     Message,
     IpAbout
  },
   data() {
    return {
    };
  },
  methods: {
    //重新加载画布
    // mycanvas(){
    //   window_resize()
    // }
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
  // mounted(){
  // }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.main {
  width: 65%;
  min-width: 900px;
  min-height: 1800px;
  margin: 10px auto;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(206, 206, 206,.8);
  display: flex;
  justify-content: space-between;
}
.content{
  display: block;
  width: 77%;
  .top{
    width: 100%;
    height: 150px;
    background: orange;
  }
  .music{
    width: 98%;
    margin: 5px auto;
    height: 140px;
    background: skyblue;
  }
  .time_line{
    width: 98%;
    margin: 10px auto;
    // text-align: center;
  }
}
 .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
.rside{
  width: 23%;
}
</style>