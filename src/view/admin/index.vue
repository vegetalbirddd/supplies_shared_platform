<template>
  <div>
    <el-container class="home-container">
      <el-header>
        <h2 style="color: #fff; letter-spacing: 0.2rem">
          疫情物资共享平台——后台管理系统
        </h2>
        <router-link active-class="active" to="/user"
            >跳转用户界面(test)</router-link
          >
        <el-dropdown>
          <span class="el-dropdown-link">
            <img
              src="../../assets/Home/user.jpg"
              alt=""
              style="
                cursor: pointer;
                margin-top: 5px;
                border-radius: 100%;
                height: 50px;
                width: 50px;
              "
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="open">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside style="width: auto;">
          <nav-aside />
        </el-aside>
        <el-main>
          <!-- 面包屑 -->
          <breadcrumb style="padding-bottom: 20px;"/>
          <!-- 页面内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Breadcrumb from '../../components/Breadcrumb';
import NavAside from "../../components/NavAside";
export default {
  components: { NavAside,Breadcrumb },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
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
        .catch(() => {});
    },
  },
};
</script>
<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #2380cb;
  line-height: 60px;
}
.el-main {
  height: calc(100vh - 60px);
  background-color: #f8f8f8;
}
</style>
