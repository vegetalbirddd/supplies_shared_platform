<template>
  <div class="supplies">
    <div class="sort">
      <ul>
        <li class="firstSort">
          排序方式
        </li>
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
      <div class="card"
      v-for="item in 10"
      :key="item.index"
      >
        <div class="title">
          <span>提供</span> <span>（xx物资）</span><span>（类型）</span>
        </div>
       
        <div class="position"><span>位置</span> <span>xxxxxxxxxxx</span></div>
       
        <div class="contact"><span>联系方式</span> <span>12345678901</span></div>
 
        <div class="description">
          <p><span style="font-size:16px;">描述说明 </span>由于Vue在开发时对路由支持的不足，于是官方补充了vue-router插件。vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，实际上就是组件的切换。路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。</p>
        
        </div>
        <button>请求帮助</button>
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
    };
  },
  created() {},
  computed: {},
  methods: {
    isSorted(no) {
      this.sorted = no;
      console.log(no);
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
  height: 300px;
  cursor: pointer;
  // border-radius: 5px;
  box-shadow: 1px 1px 5px #c7c7c7;
  box-sizing: border-box;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 30px;//card's spacing
  margin-bottom: 30px;
  div {
    margin-bottom: 15px;
  }
}
.description {
  p {

    font-size: 12px;
    word-break: break-all;
  overflow: hidden;
   text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  }
}
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
}
button:hover {
   
  color: #3da8ff;
}
button:active {
  border: 1px solid #3da8ff;
}
</style>
