<template>
  <div>
    <div>
      <ul class="cards">
        <li style="margin-right: 10%">
          <div>
            <img src="../../assets/icon/user.png" alt="" />

            <h4>{{ allUserNum }}</h4>
            <p style="font-size: 14px; color: #666">用户数量</p>
          </div>
        </li>
        <li style="margin-right: 10%">
          <div>
            <img src="../../assets/icon/sup.png" alt="" />
          </div>
          <h4 style="margin-bottom: 5px">{{ allSupNum }}</h4>
          <p style="font-size: 14px; color: #666">发布物资数量</p>
        </li>
        <li>
          <div>
            <img src="../../assets/icon/need.png" alt="" />
          </div>
          <h4 style="margin-bottom: 5px">{{ allNeedNum }}</h4>
          <p style="font-size: 14px; color: #666">发布需求数量</p>
        </li>
      </ul>
    </div>
    <div id="mycharts" ref="mycharts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allUserNum: 1,
      allSupNum: 2,
      allNeedNum: 3,
      date: ["a", "b", "c"],
      supNum: [3, 2, 3],
      needNum: [1, 4, 2],
      // echarts: [
      //   {
      //     supNum: 7,
      //     needNum: 1,
      //     date: "day1",
      //   },
      //   {
      //     supNum: 5,
      //     needNum: 5,
      //     date: "day2",
      //   },
      //   {
      //     supNum: 8,
      //     needNum: 6,
      //     date: "day3",
      //   },
      // ],
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    // 绘制折线图
    drawLine() {
      const echarts = require("echarts");
      let mycharts = echarts.init(this.$refs.mycharts);
      let option = {
        title: {
          text: "平台近一周发布数据情况",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["发布物资数量", "发布需求数量"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.date,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "发布物资数量",
            type: "line",
            data: this.supNum,
          },
          {
            name: "发布需求数量",
            type: "line",
            data: this.needNum,
          },
        ],
      };
      mycharts.setOption(option);
    },
    // 请求后端数据接口
    async getData() {
      this.$axios({
        method: "get",
        url: "/admin",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((res) => {
        this.allUserNum = res.data.map.allUserNum;
        this.allSupNum = res.data.map.allSupNum;
        this.allNeedNum = res.data.map.allNeedNum;
        this.date = res.data.date;
        this.supNum = res.data.supNum;
        this.needNum = res.data.needNum;
        console.log(this.date);
        this.drawLine();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: #fff;
  border-radius: 5px;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  // display: inline-block;
  width: 20vw;
  height: 20vw;
  background-color: rgba(243, 243, 243, 0.324);
  border: 1px solid #ebeef5;
  border-radius: 3px;
  box-shadow: #bbb 3px 3px 5px, rgb(234, 234, 234) -3px -3px 5px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-top: 20%;
    img {
      width: 8vw;
    }
  }
  p,
  h4 {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  h4 {
    margin-top: 7px;
  }
  transition: box-shadow 0.6s;
}
li:hover {
  box-shadow: #999 5px 5px 5px, #bbb -3px -3px 5px;
}
// 图标部分
#mycharts {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
