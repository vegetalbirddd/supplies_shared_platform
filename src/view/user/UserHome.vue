<template>
  <div class="main">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banner" :key="item.name">
          <h3>
            <img :src="item.url" alt="" style="height: 337px; width: 1280px" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <br />
    <br />
    <!-- 需求浏览 -->
    <div class="need">
      <el-card class="box-card needcard">
        <div slot="header" class="clearfix">
          <span class="itemT">求助信息</span>
          <el-button
            @click="goNeed"
            style="float: right; padding: 3px 0"
            type="text"
            >查看更多</el-button
          >
        </div>
        <!-- :to="{name: 'applename', query: {color: 'red' }}" -->
        <div v-for="(item, index) in need" :key="index" @click="toNeedD(index)" class="text item">
          {{ item.needName }}  （{{item.needType}}）
        </div>
      </el-card>
    </div>
    <br /><br />
    <!-- 物资浏览 -->
    <div class="supplies">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="itemT">物资浏览</span>
          <el-button
            @click="goSupplies()"
            style="float: right; padding: 3px 0"
            type="text"
            >查看更多</el-button
          >
        </div>
        <div v-for="(item, index) in sup" :key="index" class="text item" @click="toSupD(index)">
          {{ item.supName }}  （{{item.supType}}）
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        {
          name: "banner1",
          url: require("../../assets/banner/banner1.jpg"),
        },
        {
          name: "banner2",
          url: require("../../assets/banner/banner2.jpg"),
        },
        {
          name: "banner3",
          url: require("../../assets/banner/banner3.jpg"),
        },
      ],
      // 展示的物资、需求数据，数据库随机展示
      sup: [
        {
          supId: 1,
          supName: "abc",
          supType: "防护用具",
        },
      ],
      need: [
        {
          needId: 2,
          needName: "efg",
          needType: "药品",
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    goSupplies() {
      this.$router.push("/user/supplies");
    },
    goNeed() {
      this.$router.push("/user/need");
    },
    async getData() {
      const res1 = await this.$axios.get("/user/supplies/limit");
      const res2 = await this.$axios.get("/user/supplies/limit");
      this.sup = res1.data.data;
      this.need = res2.data.data;
    },
    toNeedD(index) {
      this.$router.push({
        name: "needdetails",
        query: { needId: this.need[index].needId },
      });
    },
    toSupD(index) {
      this.$router.push({
        name: "supdetails",
        query: { supId: this.sup[index].supId },
      });
    }
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  background-color: #fff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// 卡片
.text {
  font-size: 16px;
}
.itemT {
  font-size: 20px;
  font-weight: 600;
}
.item {
  margin-bottom: 18px;
  cursor: pointer;
  color: #3b3a3a
}
.item:hover {
  color: #409eff
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 1200px;
  margin: auto;
}
</style>
