<template>
  <div class="NavBar">
    <!-- 顶部导航栏 -->
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#3da8ff"
      text-color="#666"
    >
   
    <div class="l-content">
      <el-menu-item index="1"
        disabled 
        style=""
        ><img src="../assets/Home/HomeLogo.png"
      /></el-menu-item>
      <el-menu-item index="2">首页</el-menu-item>
      <el-menu-item index="3">物资浏览</el-menu-item>
      <el-menu-item index="4">发布需求/物资</el-menu-item>
      
      <div class="search">
        
      </div>
      </div>
     
      <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            src="../assets/Home/user.jpg"
            alt=""
            style="width: 60px; border-radius: 100%"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    </el-menu> -->

    <div class="l-content">
      <ul>
        <li><img src="../assets/Home/HomeLogo.png" alt=""></li>
        <li>首页</li>
        <li></li>
      </ul>
      
      
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            src="../assets/Home/user.jpg"
            alt=""
            style="width: 60px; height:60px; border-radius: 100%"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!-- <ul>
      <li class="logo"><img src="../assets/Home/HomeLogo.png" /></li>
      <li>
        <router-link
          :to="item.path"
          v-for="item in list"
          :key="item.name"
          >{{ item.label }}</router-link
        >
      </li>
      <li><router-link :to="{ name: 'user'}" :class="isSelected ? 'selected':''">首页</router-link></li>
        <li><router-link :to="{ name: 'user'}">物资浏览</router-link></li>
        <li><router-link :to="{ name: 'user'}">发布需求/物资</router-link></li>
    </ul> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelected: true,
      activeIndex: "1",
      list: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/home/mall",
          name: "mall",
          label: "物资浏览",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/home/user",
          name: "user",
          label: "发布需求/物资",
          icon: "user",
          url: "UserManage/UserManage",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
// ul {
//   height: 80px;
//   overflow: hidden;
//   background-color: #fff;
//   box-shadow: 0px 1px 5px #999;
// }

// li {
//   float: left;
//   display: block;
//   color: #333333;
//   text-align: center;
//   font-weight: 600;
//   font-size: 20px;
//   padding-top: 10px;
//   margin: 0 10px;
//   text-decoration: none;
//   img {
//     height: 65px;
//   }
// }
// .is-disabled {
//   opacity: 1;
//   cursor: default;
// }
</style>

<style lang="less" scoped>
.NavBar {
  height: 80px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px #666;
}

li {
 display: inline-block;
  list-style: none;
line-height: 80px;
}
img {
  height: 65px;
}
</style>