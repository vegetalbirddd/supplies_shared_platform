<template>
  <div>
    <div class="card">
      <p>
        <span>需要 </span
        >（一个长长长长长长长长长长长长长长长长长长的药名）（类型）
      </p>
      <p>
        <span>位置 </span
        >湖南省湘潭市岳塘区福星东路88号湖南工程学院新校区滨江10-666
      </p>
      <p>
        <span>联系方式 </span>12345678901（手机号码）12345678901（微信）
      </p>
      <p>
        <span>描述说明 </span
        >哪怕是在疫情期间我们也要充满正能量，非常时期宅在宿舍，确保自身安全，不让家人担心，阳光明媚的早上，让心情充满阳光，让身体永远健康，让疫情尽快驱散，让生活恢复正常。大家一起抗疫情，尽快打赢这一仗。哪怕是在疫情期间我们也要充满正能量，非常时期宅在宿舍，确保自身安全，不让家人担心，阳光明媚的早上，让心情充满阳光，让身体永远健康，让疫情尽快驱散，让生活恢复正常。大家一起抗疫情，尽快打赢这一仗
      </p>
      <button style="height: 30px;
  width: 75px;">给予帮助</button>
  <button @click="back" style="height: 30px;
  width: 61px;margin-left:15px;">返回</button>
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
        this.$router.push('/user/supplies');
    }
  },
};
</script>
<style lang="less" scoped>
.card {
  width: 50vw;
  box-shadow: 1px 1px 5px #c7c7c7;
  box-sizing: border-box;
  padding: 30px;
  div {
    margin-bottom: 15px;
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
      font-size: 20px;
      font-weight: 600;
      margin-right: 10px;
    }
  }
}
button {
  
//   float: right;
  font-size: 12px;
  cursor: pointer;
  color: #606266;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 30px;
}
button:hover {
  color: #3da8ff;
}
button:active {
  border: 1px solid #3da8ff;
}
</style>
