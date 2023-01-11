<template>
  <div>
    <div class="header">
      <div class="box">
        <h1>
          <img src="../assets/Home/HomeLogo.png" />
          <span style="font-size: 25px; padding-left: 10px"
            >疫情物资共享平台</span
          >
        </h1>
        <nav>
          <router-link active-class="active" to="/user/home">首页</router-link>
          <router-link active-class="active" to="/user/supplies"
            >物资浏览</router-link
          >

          <router-link active-class="active" to="/user/release"
            >发布需求</router-link
          >
          <router-link active-class="active" to="/user/release2"
            >发布物资</router-link
          >
        </nav>
      </div>
      <div class="box" style="padding-right: 20px">
        <input
          class="text"
          type="text"
          placeholder="搜索需要的物资"
          name="search"
        />
        <input class="button" type="button" value="搜索" />

        <!-- <img
          src="../assets/Home/user.jpg"
          style="border-radius: 100%;cursor:pointer;"
          @click="toUserInfo"
        /> -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <img
              src="../assets/Home/user.jpg"
              alt=""
              style="cursor: pointer; border-radius: 100%"
              @click="toUserInfo"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><span @click="toUserInfo">个人中心</span></el-dropdown-item
            >
            <el-dropdown-item><span @click="open">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="contents">
      <div class="content">
        <!--指定组件的位置-->
        <router-view></router-view>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    activeClass() {
      // if(this.router == '/user/release')
      console.log(1);
    },
    toUserInfo() {
      this.$router.push("/user/info");
    },
    toLogin() {
      this.$router.push("/login");
    },
    open() {
      this.$confirm("确定要退出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 清空token
          window.sessionStorage.clear();
          //跳转回登录页面
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "退出成功啦",
          });
        })
        .catch(() => {
        });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #ffff;
  color: #000;
  box-shadow: 0 1px 5px #999;
  /*吸顶效果*/
  /* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/
}
.box {
  display: flex;
  align-items: center;
}
h1 {
  display: flex;
  align-items: center;
  color: rgb(59, 58, 58);
  padding: 0px 20px;
}
img {
  width: 60px;
  height: 60px;
}

nav {
  display: flex;
  align-items: center;
  margin: 0px 20px;
}
nav a {
  padding: 0 15px;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: normal;
  opacity: 0.9;
}

nav a:hover {
  color: #3da8ff;
}

.active {
  color: #3da8ff;
  pointer-events: none;
  opacity: 1;
}

/*搜索框*/

.text {
  height: 22px;
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 3px 16px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}
.text:focus {
  outline: none;
  border-color: #3da8ff;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px #3da8ff;
}
.button {
  width: 60px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  margin-right: 35px;
  border: 1px solid #3da8ff;
  background-color: #3da8ff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
}

.contents {
  margin-top: 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content {
  display: flex;
  // width: 1400px;
  // height: 1400px;
}
.footer {
  height: 10vh;
}
</style>