<template>
  <div class="userInfo">
    <el-container>
      <el-header>
        <div class="user">
          <img src="../../assets/Home/user.jpg" />
          <div class="wordInfo">
            <p>姓名<span>noni</span></p>
            <p>联系方式<span>12345678901</span></p>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-card class="published">
          <div slot="header" class="clearfix">
            <span>我发布的</span>
            <el-button @click="toReward()" style="float: right; padding: 3px 0" type="text">下载帮助奖励文件</el-button>
          </div>
          <div
            v-for="o in 4"
            :key="o"
            class="text item"
            style="margin-bottom: 15px"
          >
            {{ "物资信息 " + o }}
          </div>
        </el-card>
        <br /><br />
        <el-card class="acquired">
          <div slot="header" class="clearfix">
            <span>已获得的</span>
          </div>
          <div
            v-for="o in 4"
            :key="o"
            class="text item"
            style="margin-bottom: 15px"
          >
            {{ "物资信息 " + o }}
          </div>
        </el-card>
      </el-main>
    </el-container>
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
    toReward(){
      this.$router.push('/user/reward');
    }
  },
};
</script>
<style lang="less" scoped>
.userInfo {
  width: 80vw;
  //   background-color: #f5f5f5;
}
//用户信息样式header部分
.el-header {
  display: block;
  margin-left: 80px;
  margin-bottom: 100px;
  .user {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    p {
      font-weight: 600;
      margin-top: 10px;
      font-size: 20px;
      span {
        font-weight: 400;
        margin-top: 10px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
    .wordInfo {
      padding-left: 50px;
    }
  }
}
//main部分信息样式
</style>
