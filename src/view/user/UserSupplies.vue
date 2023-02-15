<template>
  <div class="supplies">
    <div class="sort">
      <ul>
        <li class="firstSort">排序方式</li>
        <li
          v-for="item in sorts"
          :key="item.name"
          :class="sorted == item.no ? 'sorted' : ''"
          @click="isSorted(item.no)"
        >
          {{ item.label }}
        </li>
        <!-- 时间越近越靠前 -->
        <!-- <li :class="sorted == 1 ? 'sorted' : ''">时间</li> -->
        <!-- 选择省市区 -->
        <!-- <li :class="sorted == 2 ? 'sorted' : ''">地区</li> -->
        <!-- 药物类型，比如口罩、退烧药、感冒药、儿童药、抗原药，收集表单的时候需要填写类型-->
        <!-- <li :class="sorted == 3 ? 'sorted' : ''" class="string">物资类型</li> -->
      </ul>
    </div>

    <div class="cards">
      <div class="card" v-for="(item, index) in handledData" :key="index">
        <img v-if="item.isFinished == 1" class="solveIcon" src="../../assets/Home/solve.png" alt="" />
        <p style="-webkit-line-clamp: 2">
          <span>提供 </span>{{ item.supName }} （{{ item.supType }}）
        </p>
        <p style="-webkit-line-clamp: 2">
          <span>位置 </span>{{ item.supLocation }}
        </p>
        <!-- <p style="-webkit-line-clamp: 2">
          <span>联系方式 </span>12345678901（手机号码）12345678901（微信）
        </p> -->
        <div class="last">
          <p style="-webkit-line-clamp: 6">
            <span>描述说明 </span>{{ item.supDescription }}
          </p>
        </div>
        <button @click="goDetail(item.id)">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sorted: 1,
      sorts: [
        {
          no: 1,
          name: "time",
          label: "时间",
        },
        {
          no: 2,
          name: "district",
          label: "地区",
        },
        {
          no: 3,
          name: "type",
          label: "物资类型",
        },
      ],
      sup: [],
      handledData: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    isSorted(no) {
      this.handledData = this.sup.filter((data) => data.isShow == 0);
      this.sorted = no;
      // console.log(no)
      if (no == 1) {
        this.handleSortId();
      }
      if (no == 2) {
        this.handleSortArea();
      }
      if (no == 3) {
        this.handleSortType();
      }
    },
    handleSortId() {
      this.handledData = this.sortKey(this.handledData, "id");
      // console.log(this.sup)
    },
    handleSortType() {
      this.handledData = this.sortKey(this.handledData, "supType");
    },
    handleSortArea() {
      this.handledData = this.sortKey2(this.handledData, "supLocation");
    },
    // 倒序
    sortKey(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },
    // 正序
    sortKey2(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },

    goDetail(id) {
      this.$router.push({
        path: "/user/supdetails",
        query: { supId: id },
      });
    },
    async getData() {
      const res = await this.$axios.get("/user/supplies");
      this.sup = res.data.data;
      this.isSorted(1);
      console.log(res);
    },
  },
};
</script>
<style lang="less" scoped>
.sort {
  height: 30px;
  line-height: 30px;
  // margin-top: 30px;
  margin-left: 15px;
  border-radius: 8px;
}
.firstSort {
  cursor: default !important;
  font-weight: 600;
}
li {
  height: 20px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  list-style: none;
  font-size: 15px;
  color: #333;
  padding: 0 30px;
  border-right: 1px solid #c7c7c7;
}
li:last-child {
  border: none;
}
.sorted {
  color: #3da8ff;
}
.cards {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin-left: 30px;
  margin-top: 30px;

  // width: 100vw;
}
// 卡片调整
.card {
  // float: left;
  width: calc(25% - 30px);
  // height: calc(25vw - 30px);
  // cursor: pointer;
  // border-radius: 5px;
  box-shadow: 1px 1px 5px #c7c7c7;
  box-sizing: border-box;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 30px; //card's spacing
  margin-bottom: 30px;
  div {
    margin-bottom: 15px;
  }
  p {
    font-size: 12px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;

    span {
      font-size: 16px;
    }
  }
  .last {
    display: block;
    height: 101px;
  }
  transition: box-shadow 0.5s;
}
// .description {

// }
.card:hover {
  box-shadow: 1px 1px 10px #999;
}
.solveIcon {
  float: right;
  width: 30px;
}
button {
  height: 30px;
  width: 75px;
  float: right;
  font-size: 12px;
  cursor: pointer;
  color: #606266;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 30px;
}
button:hover {
  color: #3da8ff;
}
button:active {
  border: 1px solid #3da8ff;
}
</style>
