<template>
  <div>
    <el-container class="home-container">
      <el-header> </el-header>
      <el-container>
        <el-aside style="width: 200px">
          <nav-aside />
        </el-aside>

        <el-container>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavAside from "../../components/NavAside";
export default {
  components: { NavAside },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #2380cb;
}

</style>
