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
      </ul>
    </div>

    <div class="cards">
      <div class="card" v-for="(item,index) in need" :key="index">
        <p style="-webkit-line-clamp: 2">
          <span>需要 </span
          >{{item.needName}}  （{{item.needType}}）
        </p>
        <p style="-webkit-line-clamp: 2">
          <span>位置 </span
          >{{item.needLocation}}
        </p>
        <div class="last" style="height: 101px">
          <p style="-webkit-line-clamp: 6">
            <span>描述说明 </span
            >{{item.needInstruction}}
          </p>
        </div>
        <button @click="goDetail(item.needId)">查看详情</button>
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
      need: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    isSorted(no) {
      this.sorted = no;
    },
    goDetail(id) {
      this.$router.push({
        name: "needdetails",
        query: { needId: id },
      });
    },
    async getData() {
      const res = await this.$axios.get("/user/need")
      this.need = res.data
    }
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
  transition: box-shadow 0.5s;
}
// .description {

// }
.card:hover {
  box-shadow: 1px 1px 10px #999;
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
