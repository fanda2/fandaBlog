<template>
  <div class="waterfall" ref="wcontent">
    <div v-for="(colume, index) in renderColumns" :key="index" class="column">
      <div
        v-for="item in colume"
        :key="item.value"
        @click="getView(item.imgurl)"
      >
        <img :src="item.imgurl" />
      </div>
    </div>

    <!-- 加载动画 -->
    <div class="onload" v-if="loading">
      <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
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
        {
          value: 0,
          height: "150",
          background: "#409eff",
          text: "1",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img1.jpg",
        },
        {
          value: 1,
          height: "250",
          background: "#67c23a",
          text: "2",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img2.jpg",
        },
        {
          value: 2,
          height: "250",
          background: "#e6a23c",
          text: "3",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img3.jpg",
        },
        {
          value: 3,
          height: "250",
          background: "#f56c6c",
          text: "4",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img4.jpg",
        },
        {
          value: 4,
          height: "180",
          background: "#909399",
          text: "5",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img5.jpg",
        },
        {
          value: 5,
          height: "250",
          background: "#409eff",
          text: "6",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img6.jpg",
        },
        {
          value: 6,
          height: "180",
          background: "#67c23a",
          text: "7",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img7.jpg",
        },
        {
          value: 7,
          height: "250",
          background: "#e6a23c",
          text: "8",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img8.jpg",
        },
        {
          value: 8,
          height: "180",
          background: "#f56c6c",
          text: "9",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img9.jpg",
        },
        {
          value: 10,
          height: "150",
          background: "#409eff",
          text: "11",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img10.jpg",
        },
        {
          value: 11,
          height: "250",
          background: "#67c23a",
          text: "12",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img11.jpg",
        },
        {
          value: 12,
          height: "250",
          background: "#e6a23c",
          text: "13",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img12.jpg",
        },
        {
          value: 13,
          height: "250",
          background: "#f56c6c",
          text: "14",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img13.jpg",
        },
        {
          value: 14,
          height: "180",
          background: "#909399",
          text: "15",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img14.jpg",
        },
        {
          value: 15,
          height: "250",
          background: "#409eff",
          text: "16",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img15.jpg",
        },
        {
          value: 16,
          height: "180",
          background: "#67c23a",
          text: "17",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img16.jpg",
        },
        {
          value: 17,
          height: "250",
          background: "#e6a23c",
          text: "18",
          top: "",
          imgurl: " http://www.fjtbkyc.net/bgImg/img17.jpg",
        },
        {
          value: 18,
          height: "180",
          background: "#f56c6c",
          text: "19",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img18.jpg",
        },
        {
          value: 19,
          height: "150",
          background: "#909399",
          text: "20",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img19.jpg",
        },
        {
          value: 20,
          height: "150",
          background: "#409eff",
          text: "21",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img20.jpg",
        },
        {
          value: 21,
          height: "250",
          background: "#67c23a",
          text: "22",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img21.jpg",
        },
        {
          value: 22,
          height: "250",
          background: "#e6a23c",
          text: "23",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img22.jpg",
        },
        {
          value: 23,
          height: "250",
          background: "#f56c6c",
          text: "24",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img23.jpg",
        },
        {
          value: 24,
          height: "180",
          background: "#909399",
          text: "25",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img24.jpg",
        },
        {
          value: 25,
          height: "250",
          background: "#409eff",
          text: "26",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img25.jpg",
        },
        {
          value: 26,
          height: "180",
          background: "#67c23a",
          text: "27",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img26.jpg",
        },
        {
          value: 27,
          height: "250",
          background: "#e6a23c",
          text: "28",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img27.jpg",
        },
        {
          value: 28,
          height: "180",
          background: "#f56c6c",
          text: "29",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img28.jpg",
        },
        {
          value: 29,
          height: "150",
          background: "#909399",
          text: "30",
          top: "",
          imgurl: "http://www.fjtbkyc.net/bgImg/img29.jpg",
        },
      ],
      columns: [],
      arrIndex: [],
      loading: false,
      lineCount: 4,
      renderColumns: [],
    };
  },
  mounted() {
    // const container = this.$refs.wcontent;
    window.addEventListener("resize", (e) => {
      const width = e.target.innerWidth;
      if (width > 800) {
        this.lineCount = 4;
      } else if (width <= 550) {
        this.lineCount = 2;
      } else if (width < 800) {
        this.lineCount = 3;
      }
      this.renderColumnMethod();
    });
    this.renderColumnMethod();
  },
  computed: {},
  methods: {
    //添加元素到数组中
    renderColumnMethod() {
      //初始化数组
      const renderColums = [];
      for (let i = 0; i < this.lineCount; i++) {
        renderColums[i] = [];
      }
      const renderColumsHeight = new Array(this.lineCount).fill(0);

      this.contentArr.forEach((content) => {
        const { imgurl, value, height } = content;
        const minIndex = this.findMinHeightColumn(renderColumsHeight);
        renderColums[minIndex].push({
          imgurl,
          value,
          height,
        });
        renderColumsHeight[minIndex] =
          renderColumsHeight[minIndex] + Number(height);
      });
      this.renderColumns = renderColums;
    },

    //寻找到每一列中高度最小的
    findMinHeightColumn(column) {
      let minIndex = 0;
      let minValue = column[0];
      for (let i = 0; i < column.length; i++) {
        if (column[i] < minValue) {
          minIndex = i;
          minValue = column[i];
        }
      }
      return minIndex;
    },
    //预览图片
    getView(e) {
      console.log(e);
    },

    //放入元素到列表
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
              defaultWidth: 210,
            };
          }
          resolve();
        }, 500);
        reject();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.waterfall {
  display: flex;
}
.column {
  flex: 1;
  div {
    margin: 0 5px 5px 5px;
  }
}
img {
  width: 100%;
}
.default-card-animation {
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
// .container {
//   width: 100%;
//   margin: 0 auto;
//   padding-bottom: 20px;
//   display: flex;
//   justify-content: space-around;
// //   background: pink;
//   transition: all 0.5s ease-in-out;
// }
//onload加载
.onload {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  margin: 0 auto;
}
</style>
