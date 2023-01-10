<template>
<<<<<<< HEAD
  <div class="UserInfo">
    <header>
      <img
        src="../../assets/Home/user.jpg"
        style="border-radius: 100%; width: 150px"
      />
      <div class="info">
        <p>姓名<span>noni</span></p>
        <p>账号<span>1063030602</span></p>
        
      </div>
    </header>
    <main>
        
    </main>
=======
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
>>>>>>> origin/aa
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
<<<<<<< HEAD
.UserInfo {
  width: 80vw;
  //   background-color: #f5f5f5;
}
header {
    margin-left: 80px;
  img {
    float: left;
  }
  .info {
    float: left;
    margin-top: 15px;
    margin-left: 80px;
=======
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
>>>>>>> origin/aa
    p {
      font-weight: 600;
      margin-top: 10px;
      font-size: 20px;
      span {
<<<<<<< HEAD
      font-weight: 400;
      margin-top: 10px;
      padding-left: 20px;
      font-size: 16px;
    }
    }
    
  }
}
=======
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
>>>>>>> origin/aa
</style>
