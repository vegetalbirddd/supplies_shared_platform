<template>
  <div>
    <div class="card">
      <h1>物资详情</h1>
      <p>
        <span>提供 </span
        >{{sup.supName}}  （{{sup.supType}}）
      </p>
      <p>
        <span>位置 </span
        >{{sup.supLocation}}
      </p>

      <p>
        <span>描述说明 </span
        >{{sup.supDescription}}
      </p>
      <el-tooltip
        class="item"
        effect="dark"
        content="注意保护他人隐私！！"
        placement="top-start"
      >
        <button @click="dialogVisible = true" style="height: 30px; width: 75px">
          请求帮助
        </button>
      </el-tooltip>

      <button
        @click="back"
        style="height: 30px; width: 61px; margin-left: 15px"
      >
        返回
      </button>
    </div>
    <el-dialog title="提供者联系方式" :visible.sync="dialogVisible" width="30%">
      <span>{{sup.supContact}} </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      sup: {
        supName: '123',
      },
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    back() {
      this.$router.go(-1)
    },
    async getData() {
<<<<<<< HEAD
      const res = await this.$axios.get(`/user/supplies/supDetail?supId=${this.$route.query.supId}`)
      this.sup = res.data.data;
=======
      const res = await this.$axios.get(`/user/supplies/supdetails?supId=${this.$route.query.supId}`)
      this.sup = res.data
>>>>>>> 292db94af46eab5bc6523b98f8aa573c0f41827d
   
    }
  },
};
</script>
<style lang="less" scoped>
.card {
  margin-top: 8vh;
  width: 50vw;
  box-shadow: 1px 1px 5px #c7c7c7;
  box-sizing: border-box;
  padding: 30px;
  div {
    margin-bottom: 15px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #113a4f;
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
      color: #113a4f;
      font-size: 20px;
      font-weight: 600;
      margin-right: 10px;
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
}
</style>
