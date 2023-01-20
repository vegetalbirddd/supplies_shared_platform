<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
    <div class="toggle-button" @click="isCollapse = !isCollapse">
      <i v-if="!isCollapse" class="el-icon-s-fold"></i>
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
    </div>
    <el-menu-item 
    @click="clickMenu(item)"
    v-for="(item, index) in menuData" 
    :key="index"
    :index="item.key"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- <el-menu-item index="1">
              <i class="el-icon-house"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user"></i>
              <span slot="title">用户信息</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">已发布物资</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-connection"></i>
              <span slot="title">已发布需求</span>
            </el-menu-item> -->
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          key: '1',
          path: "/admin/home",
          name: "home",
          label: "首页",
          icon: "house",
        },
        {
          key: '2',
          path: "/admin/info",
          name: "info",
          label: "用户信息",
          icon: "user",
        },
        {
          key: '3',
          path: "/admin/sup",
          name: "sup",
          label: "已发布的物资",
          icon: "takeaway-box",
        },
        {
          key: '4',
          path: "/admin/need",
          name: "need",
          label: "已发布的需求",
          icon: "connection",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    clickMenu(item) {
        if(item.path !== this.$router.path) {
            this.$router.push(item.path);
        }
    }
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    overflow: hidden;
    border: 0;
    width: 200px;
//   min-height: 400px;
}
.toggle-button {
  background-color: #bedeff;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
