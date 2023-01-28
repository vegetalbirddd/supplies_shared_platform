<template>
  <div>
    <!-- 第一部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>用户详情</h3>
        <el-button @click="back()">返回</el-button>
      </div>
      <div class="user-bottom">
        <img class="avatar" src="../../assets/Home/user.jpg" alt="" />
        <h3>用户名</h3>
        <p>发布&nbsp;&nbsp;&nbsp;物资&nbsp;x&nbsp;|&nbsp;需求&nbsp;x</p>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>基础信息</h3>
      </div>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple">用户名：xxx</div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">性别：未知</div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple">发布物资数：x</div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">手机号码：x</div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple">发布需求数：x</div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            联系方式：湖南省湘潭市岳塘区福星中路88号湖南工程学院新校区
          </div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <!-- 第三部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>发布物资</h3>
      </div>
      <div v-for="o in 4" :key="o" class="item">
        {{ "列表内容 " + o }}
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>发布需求数</h3>
      </div>
      <div v-for="o in 4" :key="o" class="item">
        {{ "列表内容 " + o }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    back() {
      this.$router.push("/admin/info");
    },
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
}
.user-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.user-bottom {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #444;
  }
  p {
    color: #888;
    font-size: 15px;
    // padding-right: 45px;
  }
}
h3 {
  color: #555;
}
.avatar {
  width: 15%;
  border-radius: 100%;
}
.el-row,
.item {
  margin-bottom: 20px;
  color: #333;
}
.el-col {
  margin-right: 15px;
}
</style>