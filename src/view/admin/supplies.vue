<template>
  <div class="bg">
    <div class="top">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        ref="formInline"
      >
        <div class="left">
          <el-form-item label="物资名称" prop="supName">
            <el-input
              v-model="formInline.supName"
              placeholder="输入物资名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="物资类型" prop="type">
            <el-select v-model="formInline.type" placeholder="请选择物资类型">
              <el-option label="所有类型" value=""></el-option>
              <el-option label="防护用具" value="防护用具"></el-option>
              <el-option label="药品" value="药品"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item>
            <el-button @click="search()" type="primary" icon="el-icon-search"
              >查询</el-button
            >
            <el-button
              icon="el-icon-refresh-right"
              @click="resetForm('formInline')"
              >重置</el-button
            >
            <el-button type="info" icon="el-icon-download">下载</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="table">
      <el-table :data="table" border stripe style="width: 100%">
        <el-table-column prop="id" label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="supName" label="物资名称" min-width="180">
        </el-table-column>
        <el-table-column prop="supType" label="物资类型" min-width="70">
        </el-table-column>
        <el-table-column prop="userName" label="发布用户" min-width="150">
        </el-table-column>
        <el-table-column prop="isShow" label="展示情况" min-width="70">
        </el-table-column>
        <el-table-column prop="isFinished" label="解决情况" min-width="70">
        </el-table-column>
        <el-table-column prop="operate" label="操作" min-width="300">
          <template slot-scope="scope">
            <el-button size="medium" @click="checkSup(scope.row)"
              >查看</el-button
            >
            <el-button
              size="medium"
              type="success"
              @click="handleSolve(scope.$index, scope.row)"
              >解决</el-button
            >
            <el-button
              size="medium"
              type="warning"
              @click="handleShow(scope.$index, scope.row)"
              >展示</el-button
            >
            <el-button
              size="medium"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      formInline: {
        supName: "",
        type: "",
      },
      tableData: [
        {
          id: 1,
          supName: "口罩",
          supType: "防护用具",
          userName: "张三",
          isShow: "上线",
          isFinished: "已解决",
        },
        {
          id: 2,
          supName: "布洛芬",
          supType: "药品",
          userName: "李四",
          isShow: "上线",
          isFinished: "未解决",
        },
        {
          id: 3,
          supName: "999感冒灵",
          supType: "药品",
          userName: "王五",
          isShow: "下线",
          isFinished: "未解决",
        },
        {
          id: 4,
          supName: "新型冠状病毒抗原检测试剂",
          supType: "其他",
          userName: "张三",
          isShow: "上线",
          isFinished: "已解决",
        },
      ],
      table: [],
    };
  },
  // watch: {
  //   tableData: {
  //     handler(newData, oldData) {
  //       console.log(newData)
  //     this.$axios.post("/admin/sup",newData)
  //   },
  //   deep: true,
  //   immediate: true
  //   }
  // },
  created() {
    this.getTableData();
  },
  mounted() {},
  computed: {},
  methods: {
    //获取后端表格数据
    getTableData() {
      this.$axios.get("/admin/sup", this.tableData).then((res) => {
        this.tableData = res.data.data;
        // 获取数据后执行一次查询
        this.search();
      });
    },
    //查询功能按钮
    search() {
      this.table = this.tableData.filter((data) => {
        return (
          data.supName.match(this.formInline.supName) &&
          data.supType.match(this.formInline.type)
        );
      });
    },
    //重置搜索栏按钮
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    //查看详情按钮
    checkSup(row) {
      this.$router.push({
        path: "/admin/supDetail",
        query: { supId: row.id },
      });
    },
    //解决按钮
    async handleSolve(index, row) {
      // if (row.isFinished == "未解决") {
      //   row.isFinished = "已解决";
      // } else if (row.isFinished == "已解决") row.isFinished = "未解决";
      let res = await this.$axios.post("/admin/sup", {
        isFinished: 1,
        isShow: row.isShow,
        id: row.id,
      });
      this.$message.success(res.data.msg);
      this.getTableData()
    },
    // 展示按钮
    async handleShow(index, row) {
      // if (row.isShow == "上线") {
      //   row.isShow = "下线";
      // } else if (row.isShow == "下线") row.isShow = "上线";
      let res = await this.$axios.post("/admin/sup", {
        isShow: 1,
        isFinished: row.isFinished,
        id: row.id,
      });
      this.$message.success(res.data.msg);
      this.getTableData()
    },
    //删除按钮
    async handleDelete(index, row) {
      let res = await this.$axios.post("/admin/sup/delete", {
        id: row.id,
      });
      this.$message.success(res.data.msg);
      this.getTableData()
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
// 表格上部
.el-form {
  display: flex;
  justify-content: space-between;
}
</style>
