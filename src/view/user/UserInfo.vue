<template>
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
    
  }
}
</style>
