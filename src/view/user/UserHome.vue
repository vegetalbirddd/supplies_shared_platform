<template>
  <div class="main">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banner" :key="item.name">
          <h3>
            <img :src="item.url" alt="" style="height: 350px; width: 100vw" />
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
          <span>求助信息</span>
          <el-button @click="goNeed" style="float: right; padding: 3px 0" type="text"
            >查看更多</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
    <br /><br />
    <!-- 物资浏览 -->
    <div class="supplies">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>物资浏览</span>
          <el-button @click="goSupplies" style="float: right; padding: 3px 0" type="text"
            >查看更多</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
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
    };
  },
  created() {},
  computed: {},
  methods: {
    goSupplies() {
      this.$router.push('/user/supplies')
    },
    goNeed() {
      this.$router.push('/user/need')
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
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
