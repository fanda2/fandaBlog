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
        { value: 0, height: "150", background: "#409eff", text: "1", top: ""  ,imgurl:"http://www.fjtbkyc.net/bgImg/img1.jpg"},
        { value: 1, height: "250", background: "#67c23a", text: "2", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img2.jpg"},
        { value: 2, height: "250", background: "#e6a23c", text: "3", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img3.jpg"},
        { value: 3, height: "250", background: "#f56c6c", text: "4", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img4.jpg"},
        { value: 4, height: "180", background: "#909399", text: "5", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img5.jpg"},
        { value: 5, height: "250", background: "#409eff", text: "6", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img6.jpg"},
        { value: 6, height: "180", background: "#67c23a", text: "7", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img7.jpg"},
        { value: 7, height: "250", background: "#e6a23c", text: "8", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img8.jpg"},
        { value: 8, height: "180", background: "#f56c6c", text: "9", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img9.jpg"},
        { value: 10, height: "150", background: "#409eff", text: "11", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img10.jpg" },
        { value: 11, height: "250", background: "#67c23a", text: "12", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img11.jpg" },
        { value: 12, height: "250", background: "#e6a23c", text: "13", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img12.jpg" },
        { value: 13, height: "250", background: "#f56c6c", text: "14", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img13.jpg" },
        { value: 14, height: "180", background: "#909399", text: "15", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img14.jpg" },
        { value: 15, height: "250", background: "#409eff", text: "16", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img15.jpg" },
        { value: 16, height: "180", background: "#67c23a", text: "17", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img16.jpg" },
        { value: 17, height: "250", background: "#e6a23c", text: "18", top: "" ,imgurl:" http://www.fjtbkyc.net/bgImg/img17.jpg" },
        { value: 18, height: "180", background: "#f56c6c", text: "19", top: "" ,imgurl:"http://www.fjtbkyc.net/bgImg/img18.jpg" },
        { value: 19, height: "150", background: "#909399", text: "20", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img19.jpg" },
        { value: 20, height: "150", background: "#409eff", text: "21", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img20.jpg" },
        { value: 21, height: "250", background: "#67c23a", text: "22", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img21.jpg" },
        { value: 22, height: "250", background: "#e6a23c", text: "23", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img22.jpg" },
        { value: 23, height: "250", background: "#f56c6c", text: "24", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img23.jpg" },
        { value: 24, height: "180", background: "#909399", text: "25", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img24.jpg" },
        { value: 25, height: "250", background: "#409eff", text: "26", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img25.jpg" },
        { value: 26, height: "180", background: "#67c23a", text: "27", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img26.jpg" },
        { value: 27, height: "250", background: "#e6a23c", text: "28", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img27.jpg" },
        { value: 28, height: "180", background: "#f56c6c", text: "29", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img28.jpg" },
        { value: 29, height: "150", background: "#909399", text: "30", top: "", imgurl:"http://www.fjtbkyc.net/bgImg/img29.jpg" },
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
        reject();
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
      this.init();
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
