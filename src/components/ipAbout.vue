<template>
  <div class="i_content">
      <div class="i_title">很高兴遇见你~</div>
      <div><span>您的ip是：</span>{{ipmsg}}</div>
      <div><span>您的地址是：</span>{{address}}</div>
      <div class="suggest"><span>你好，现在是：</span>{{newtime}}  <span>{{suggest}}</span></div>
  </div>
</template>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script>
import {timeNow } from '../assets/js/time.js'
export default {
    name:"ipAbout",
    props:{

    }, 
    data(){
        return{
            ipmsg:"",
            address:"四川省 成都市",
            newtime:"",
            suggestions:["这么晚了还不睡，一定有未完成的事情吧~","早呀，你不会辜负你的每一次起","早呀，美好的一一天需要先听听歌吧","中午咯，吃了午饭了吗？饭后散散步有助于身体健康","已经下午咯，美好的一天已经过半","这个点往窗外看，时候有夕阳呢","天暗下来，一天也快结束了，放下手中的工作享受一下生活吧！",],
            suggest:"",
            timer:"",  //定时器
        }
    },
    methods:{
      //获取现在的时间
    getNowdata(){
      var that=this;
      this.timer=setInterval(function(){
          that.newtime=timeNow();
      },1000)
    },
    //获取现在的小时数，每次进入页面时获取
    getHour()
    {
        var time=timeNow()
        var hh=time.split(" ")[1].substr(0,2)
        console.log(hh);
        if(hh>0&&hh<=5)
        {
            this.suggest=this.suggestions[0];
        }else if(hh>5&&hh<=9)
        {
              this.suggest=this.suggestions[1];
        }else if(hh>9&&hh<11)
        {
             this.suggest=this.suggestions[2];
        }else if(hh>=11&&hh<14)
        {
              this.suggest=this.suggestions[3];
        }else if(hh>=14&&hh<17){
             this.suggest=this.suggestions[4];
        }else if(hh>=18&&hh<=20)
        {
            this.suggest=this.suggestions[5];
        }else{
            this.suggest=this.suggestions[6];
        }
    }
    },
    created(){
        this.getNowdata();
        this. getHour();
        this.ipmsg=returnCitySN["cip"];
        console.log('222',returnCitySN["cname"])
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
  
}
</script>

<style lang="less" scoped>
.i_content{
     width: 98%;
     min-width: 250px;
    height: 200px;
    margin: 20px auto;
  // background: skyblue;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #ccc,-3px -3px 4px rgb(238, 238, 238);
  color: rgb(41, 150, 122);

  div{
      line-height: 30px;
      width: 90%;
      margin: 0 auto;
  }
}
.i_content div>span{
    color: #3c3c3c;
}
.i_title{
    width: 100%;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    border-radius: 5px;
    border-bottom: 2px solid rgb(99, 161, 219);
}
.suggest{
    height: 90px;
}
</style>>
