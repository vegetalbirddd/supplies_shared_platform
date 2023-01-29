<template>
  <div class="bg">
    <div class="sup-top">
      <h3>物资详情</h3>
      <div class="button">
        <el-button type="primary">编辑</el-button> <el-button @click="back()">返回</el-button>
      </div>
    </div>
    <div class="sup-bottom">
      <p>
        <span>提供 </span
        >（一个长长长长长长长长长长长长长长长长长长的药名）（类型）
      </p>
      <p>
        <span>位置 </span
        >湖南省湘潭市岳塘区福星东路88号湖南工程学院新校区滨江10-666
      </p>
      <p><span>提供者 </span>提供者用户名</p>
      <p><span>联系方式 </span>12345678901（手机号码）12345678901（微信）</p>
      <p>
        <span>描述说明 </span
        >哪怕是在疫情期间我们也要充满正能量，非常时期宅在宿舍，确保自身安全，不让家人担心，阳光明媚的早上，让心情充满阳光，让身体永远健康，让疫情尽快驱散，让生活恢复正常。大家一起抗疫情，尽快打赢这一仗。哪怕是在疫情期间我们也要充满正能量，非常时期宅在宿舍，确保自身安全，不让家人担心，阳光明媚的早上，让心情充满阳光，让身体永远健康，让疫情尽快驱散，让生活恢复正常。大家一起抗疫情，尽快打赢这一仗
      </p>
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
      this.$router.push("/admin/sup");
    },
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
}
.sup-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
p {
  font-size: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
  letter-spacing: 2px;
  span {
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
  }
}
</style>
