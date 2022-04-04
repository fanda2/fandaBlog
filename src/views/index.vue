<template>
   <div class="container">
    <div class="main">
      <div class="content">
         <div v-for="(item,i) in postmsg" :key="i" @click="godetial">
              <HelloItem :postmsg="item" />
         </div>
         <div class="pagenum">
           <Page :total="20" show-elevator  @on-change="pagechange" :page-size="6"/>
         </div>
      </div>
      <div class="rside">
          <Message  />
          <IpAbout />
      </div>
    </div>
  </div>
</template>

<script>
import HelloItem from '@/components/HelloItem.vue'
import Message from '@/components/myMessage.vue'
import IpAbout from '@/components/ipAbout.vue'

export default {
  //  name: 'Home',
  components: {
    HelloItem,
    Message,
    IpAbout
  },
   data() {
    return {
      blogname:"Another Dimension",
      motto: "你若安好，我便无恙", //便是这世界上最美好的时光
      postmsg:[
        {
        title:"天天",
        subtitle:"这就是美好的一天呢!",
        imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F2105211120031355-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651566391&t=b856e139eb9537692b3a7cf612f13b62",
        postid:1,
        datatime:"2022.2.21 19:02:11",
        seenum:100,
        remark:54,
      },
      {
        title:"天天",
        subtitle:"这就是美好的一天呢!",
        imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F2105211120031355-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651566391&t=b856e139eb9537692b3a7cf612f13b62",
        postid:1,
        datatime:"2022.2.21 19:02:11",
        seenum:100,
        remark:54,
      },
        {
        title:"天天",
        subtitle:"这就是美好的一天呢!",
        imgurl:"https://img1.baidu.com/it/u=3541530769,1510556506&fm=26&fmt=auto",
        postid:1,
        datatime:"2022.2.21 19:02:11",
        seenum:100,
        remark:54,
      }
      ]
    };
  },
  methods: {
    goAdmin(){
      console.log("进入后台管理页面")
    },
    // 切换每页条数时的回调，返回切换后的每页条数
    sizechange(){
      console.log(" 切换每页条数时的回调");
    },
    // 页码改变的回调，返回改变后的页码
    pagechange(e){
      console.log("目前处于第：",e);
    },
    //查看详情
    godetial(){
      console.log("dddd");
       this.$router.push("/detial");
    },
  
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作,
    mounted(){
    // this.countTime()
  },

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
  .pagenum{
    width: 100%;
    margin:50px auto;
    text-align: center;
  }
}
.rside{
  width: 23%;
}

</style>