<template>
  <div class="waterfall" ref="wcontent">
    <div class="container ">
      <div
        class="column "
        v-for="(column, index) in columns"
        :key="index"
      >
        <div
          class="item default-card-animation"
          v-for="(item, i) in column.columnArr"
          :key="i"
        >
         <img :src="item.imgurl" alt="">
        </div>
      </div>
    </div>
    <!-- 加载动画 -->
     <div class="onload" v-if="loading">
           <Col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //数据
      contentArr: [
        { value: 0, height: "150", background: "#409eff", text: "1", top: ""  ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190210%2F8534c3170a314d83b104d04aa120a040.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=d15af814c4ae34b95bc60e35efc88e4c"},
        { value: 1, height: "250", background: "#67c23a", text: "2", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yidianzhidao.com%2FUploadFiles%2Fimg_1_1195934273_1809290298_26.jpg&refer=http%3A%2F%2Fwww.yidianzhidao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=220f9c21856a2bb0cc71f76ba0b5e2cc"},
        { value: 2, height: "250", background: "#e6a23c", text: "3", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F10%2F20150810150356_hnves.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=0971bf1e69ad8e180fb704140d7a29b0"},
        { value: 3, height: "250", background: "#f56c6c", text: "4", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561358677-yVQerfxNJO.jpeg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=25e73d0d95ee43d9b160bd0dfe24aa38"},
        { value: 4, height: "180", background: "#909399", text: "5", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518282902-iSBdILoxsY.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=c4c6cd3890f420680e5db7f92a8d543c"},
        { value: 5, height: "250", background: "#409eff", text: "6", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190504%2F20%2F1556972126-MAGsvFyfEd.png&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=4ecd99f7107e39197378a2b7a04176c6"},
        { value: 6, height: "180", background: "#67c23a", text: "7", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0506%2Ff43b5bab036349f7b4ffdef661da97a8.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=fd805292f3f72e9d7ba51fc9f45245ea"},
        { value: 7, height: "250", background: "#e6a23c", text: "8", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0506%2Ff43b5bab036349f7b4ffdef661da97a8.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=fd805292f3f72e9d7ba51fc9f45245ea"},
        { value: 8, height: "180", background: "#f56c6c", text: "9", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F5a%2Ffe101126073_250_350.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=72446335a210920f58bf6c6e6a106abe"},
        { value: 9, height: "150", background: "#909399", text: "10", top: ""  ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561358677-yVQerfxNJO.jpeg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=25e73d0d95ee43d9b160bd0dfe24aa38"},
        { value: 10, height: "150", background: "#409eff", text: "11", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518282942-vBSpHErLKP.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=809ae8cf1c654bb83dbbab9437b8e276" },
        { value: 11, height: "250", background: "#67c23a", text: "12", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180109%2F9e54-fyqnici8428669.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441197&t=70f9aec9253df0dcea506df28938327a" },
        { value: 12, height: "250", background: "#e6a23c", text: "13", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h399%2F20180301%2F9ce9-fwnpcns9232331.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441157&t=46c567a84e0172aa430f0d058ba9a92f" },
        { value: 13, height: "250", background: "#f56c6c", text: "14", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.euro-premium.cn%2Fsites%2Fdefault%2Ffiles%2F2017%2F12%2F2017-12-18-609.jpg&refer=http%3A%2F%2Fwww.euro-premium.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441197&t=e67e19c5e29ebd66265d2ed779359002" },
        { value: 14, height: "180", background: "#909399", text: "15", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017110816281636782.jpg&refer=http%3A%2F%2Fpic.qqtn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=36bd6acad4963ad2d153b3a4e220a363" },
        { value: 15, height: "250", background: "#409eff", text: "16", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.euro-premium.cn%2Fsites%2Fdefault%2Ffiles%2F2017%2F09%2F2017-09-30-110.jpg&refer=http%3A%2F%2Fwww.euro-premium.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=d4d758316d5f48f3800b59a2eec7dc46" },
        { value: 16, height: "180", background: "#67c23a", text: "17", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Ftupian%2Fpre%2F201611%2F09%2Fsugelan_zheer_mao-002.jpg&refer=http%3A%2F%2Fimg.ivsky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=962fa67d0f3fff40553440ccb8b06ec4" },
        { value: 17, height: "250", background: "#e6a23c", text: "18", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2816258155-A3E56E8F829BF213072E703F23FC3DC1%2F0%3Ffmt%3Djpg%26size%3D21%26h%3D550%26w%3D410%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=def05d46f7dee911d2a2a8bb306976d5" },
        { value: 18, height: "180", background: "#f56c6c", text: "19", top: "" ,imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_2004%2F1_183281_b959196b41fb01e.jpg&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=663a187a9631164c450e2b3b3e1b8d92" },
        { value: 19, height: "150", background: "#909399", text: "20", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.euro-premium.cn%2Fsites%2Fdefault%2Ffiles%2F2017%2F09%2F2017-09-30-110.jpg&refer=http%3A%2F%2Fwww.euro-premium.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=d4d758316d5f48f3800b59a2eec7dc46" },
        { value: 20, height: "150", background: "#409eff", text: "21", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_2004%2F1_183281_b959196b41fb01e.jpg&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=663a187a9631164c450e2b3b3e1b8d92" },
        { value: 21, height: "250", background: "#67c23a", text: "22", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F5a%2Ffe101126073_250_350.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=72446335a210920f58bf6c6e6a106abe" },
        { value: 22, height: "250", background: "#e6a23c", text: "23", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_2004%2F1_183281_b959196b41fb01e.jpg&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=663a187a9631164c450e2b3b3e1b8d92" },
        { value: 23, height: "250", background: "#f56c6c", text: "24", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h399%2F20180301%2F9ce9-fwnpcns9232331.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441157&t=46c567a84e0172aa430f0d058ba9a92f" },
        { value: 24, height: "180", background: "#909399", text: "25", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Ftupian%2Fpre%2F201611%2F09%2Fsugelan_zheer_mao-002.jpg&refer=http%3A%2F%2Fimg.ivsky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=962fa67d0f3fff40553440ccb8b06ec4" },
        { value: 25, height: "250", background: "#409eff", text: "26", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F5a%2Ffe101126073_250_350.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=72446335a210920f58bf6c6e6a106abe" },
        { value: 26, height: "180", background: "#67c23a", text: "27", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_2004%2F1_183281_b959196b41fb01e.jpg&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=663a187a9631164c450e2b3b3e1b8d92" },
        { value: 27, height: "250", background: "#e6a23c", text: "28", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017110816281636782.jpg&refer=http%3A%2F%2Fpic.qqtn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=36bd6acad4963ad2d153b3a4e220a363" },
        { value: 28, height: "180", background: "#f56c6c", text: "29", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2816258155-A3E56E8F829BF213072E703F23FC3DC1%2F0%3Ffmt%3Djpg%26size%3D21%26h%3D550%26w%3D410%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=def05d46f7dee911d2a2a8bb306976d5" },
        { value: 29, height: "150", background: "#909399", text: "30", top: "", imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518282942-vBSpHErLKP.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=809ae8cf1c654bb83dbbab9437b8e276" },
      ],
      columns: [],
      arrIndex: [],
      loading: false,
      contentArr2: [],
    };
  },
  methods: {
    pushElement() {
      // promise语法
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          for (let i = 0; i < 20; i++) {
            this.contentArr2[i] = {
              value: i + this.contentArr.length,
              height: 50 * Math.random() + 50,
              background: "#409eff",
              text: i + this.contentArr.length,
              top: "",
            };
          }
          resolve();
        }, 500);
        console.log(reject);
      });
    },
    //获取高度
    getMinHeight(arr) {
      let a = [];
      for (let i = 0; i < arr.length; i++) {
        a.push(parseInt(arr[i].height) + parseInt(arr[i].top));
      }
      return Math.min.apply(null, a);
    },
    getMinIndex(val) {
      for (let i = 0; i < this.columns.length; i++) {
        let height =
          this.columns[i].columnArr[this.columns[i].columnArr.length - 1]
            .height;
        let top =
          this.columns[i].columnArr[this.columns[i].columnArr.length - 1].top;
        if (parseInt(height) + parseInt(top) == val) {
          this.arrIndex.push(i);
        }
      }
    },
    //初始化
    init() {
      this.columns = [];
      let contentLen = this.contentArr.length;
      //   根据可视区域的宽度判断需要几列
      //   let cWidth = document.documentElement.clientWidth || document.body.clientWidth;
      //获取父元素的宽度
      let cWidth = this.$refs.wcontent.clientWidth;
      // 假设图片宽度为100px
      let cLen = Math.floor(cWidth / 200 - 1)+1;
      console.log(cLen,cWidth);
      // 初始化每一列的第一行元素
      for (let i = 0; i < cLen; i++) {
        this.contentArr[i].top = 0; //预设距离顶部值为0
        this.columns.push({ columnArr: [this.contentArr[i]] });
      }

      // 对剩余元素的判断，应该放到哪一列
      for (var index = cLen; index < contentLen; index++) {
        this.arrIndex = [];
        let arr = []; //找到高度最小的一列，可能有多个
        let minHeight = 0; //高度最小的一列的高度
        let pushIndex = 0; //高度最小的一列所在位置的索引

        for (let i = 0; i < this.columns.length; i++) {
          arr.push({
            height:
              this.columns[i].columnArr[this.columns[i].columnArr.length - 1]
                .height,
            top: this.columns[i].columnArr[this.columns[i].columnArr.length - 1]
              .top,
          });
        }

        minHeight = this.getMinHeight(arr);
        this.getMinIndex(minHeight);
        if (this.arrIndex.length > 0) {
          pushIndex = Math.min.apply(null, this.arrIndex); //出现高度一样的，去索引最小的
        }
        this.contentArr[index].top = minHeight + 20;
        this.columns[pushIndex].columnArr.push(this.contentArr[index]);
      }
    },
  },
  mounted() {
    this.init();
    window.onresize = () => {
      console.time("aa");
      this.init();
      console.timeEnd("aa");
    };
    let clientH =document.documentElement.clientHeight || document.body.clientHeight;
    document.onscroll = (e) => {
      let top = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      let height =e.target.documentElement.scrollHeight || e.target.body.scrollHeight;
      if (top + clientH == height) {
        this.loading = true;
        this.pushElement().then(() => {
          //  从接口最新获取的元素push到目前高度最小的一列
          for (var index = 0; index < this.contentArr2.length; index++) {
            this.arrIndex = [];
            let arr = []; //找到高度最小的一列，可能有多个
            let minHeight = 0; //高度最小的一列的高度
            let pushIndex = 0; //高度最小的一列所在位置的索引

            for (let i = 0; i < this.columns.length; i++) {
              arr.push({
                height:
                  this.columns[i].columnArr[
                    this.columns[i].columnArr.length - 1
                  ].height,
                top: this.columns[i].columnArr[
                  this.columns[i].columnArr.length - 1
                ].top,
              });
            }

            minHeight = this.getMinHeight(arr);
            this.getMinIndex(minHeight);
            if (this.arrIndex.length > 0) {
              pushIndex = Math.min.apply(null, this.arrIndex); //出现高度一样的，去索引最小的
            }

            this.contentArr[index].top = minHeight + 20;
            this.columns[pushIndex].columnArr.push(this.contentArr[index]);
            this.loading = false;
          }
        });
      }
    };
  },
};
</script>

<style lang="less" scoped>
.waterfall {
  width: 98%;
  margin: 0 auto;
  position: relative;
}
.default-card-animation{
    animation: show-card 0.5s;
}
@keyframes show-card {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
.container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
//   background: pink;
  transition: all 0.5s ease-in-out;
}
.item {
  width: 200px;
  color: #000;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  img{
      width: 200px;
      width: 100%;
  }
}
.onload {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
@keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
}
.demo-spin-col{
        height: 100px;
        position: relative;
        margin: 0 auto;
}
</style>
