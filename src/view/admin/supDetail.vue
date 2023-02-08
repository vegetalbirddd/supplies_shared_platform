<template>
  <div class="bg">
    <div class="sup-top">
      <h3>物资详情</h3>
      <div class="button">
        <el-button type="primary" @click="edit = true">编辑</el-button>
        <el-button @click="back()">返回</el-button>
      </div>
    </div>
    <div class="sup-bottom">
      <p><span>提供 </span>{{ editForm.supName }}（{{ editForm.supType }}）</p>
      <p><span>位置 </span>{{ editForm.supLocation }}</p>
      <p><span>提供者 </span>{{ editForm.userName }}</p>
      <p><span>联系方式 </span>{{ editForm.supContact }}</p>
      <p><span>描述说明 </span>{{ editForm.supInstruction }}</p>
    </div>
    <!-- 编辑信息对话框 -->
    <el-dialog title="编辑物资信息" :visible.sync="edit" @close="handleClose()">
      <el-form ref="editFormRef" :model="editForm">
        <el-form-item prop="supName" label="物资名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.supName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="supType" label="物资类型" :label-width="formLabelWidth">
          <el-select v-model="editForm.supType" placeholder="请选择物资类型">
            <el-option label="防护用具" value="防护用具"></el-option>
            <el-option label="药品" value="药品"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="supContact" label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="editForm.supContact" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="supInstruction" label="描述说明" :label-width="formLabelWidth">
          <el-input
            v-model="editForm.supInstruction"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSave()">保 存</el-button>
        <el-button @click="edit = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // supData: {
      //   supName: "口罩",
      //   supType: "防护用具",
      //   userName: "张三",
      //   supLocation: "xx",
      //   supContact: "abc",
      //   supInstruction: "123456",
      // },
      edit: false,
      editForm: {
        supName: "口罩",
        supType: "防护用具",
        userName: "张三",
        supLocation: "xx",
        supContact: "abc",
        supInstruction: "123456",
      },
      formLabelWidth: "120px",
    };
  },
  created() {},
  mounted() {
    this.getSupData();
  },
  computed: {},
  methods: {
    back() {
      this.$router.push("/admin/sup");
    },
    async getSupData() {
      let res = await this.$axios.get("/admin/supDetail");
      this.editForm = res.data;
    },
    async handleSave() {
      const res = this.$axios
        .put("/admin/supDetail", this.editForm)
        .then((res) => {
          if (res) {
            // 刷新数据列表
            this.getSupData();
            // 提示修改成功
            this.$message.success("更新用户信息成功！");
            // 关闭对话框
            this.edit = false;
          } else {
            this.$message.error("更新用户信息失败！");
            this.edit = true;
          }
        })
        .catch((err) => {
          // 请求失败，保持不关闭对话框
          this.edit = true;
          return this.$message.error("服务器连接失败，请稍后重试");
        });
    },
    handleClose() {
      console.log("123")
      this.$refs.editFormRef.resetFields();
      this.edit = false;
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
