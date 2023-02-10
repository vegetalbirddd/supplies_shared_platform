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
          <el-form-item label="需求名称" prop="needName">
            <el-input
              v-model="formInline.needName"
              placeholder="输入需求物资名称"
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
        <el-table-column prop="needId" label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="needName" label="需求名称" min-width="180">
        </el-table-column>
        <el-table-column prop="needType" label="物资类型" min-width="70">
        </el-table-column>
        <el-table-column prop="userName" label="发布用户" min-width="150">
        </el-table-column>
        <el-table-column prop="isNeedShow" label="展示情况" min-width="70">
        </el-table-column>
        <el-table-column prop="isNeedSolve" label="解决情况" min-width="70">
        </el-table-column>
        <el-table-column prop="operate" label="操作" min-width="300">
          <template slot-scope="scope">
            <el-button size="medium" @click="checkNeed(scope.row)"
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
        needName: "",
        type: "",
      },
      tableData: [
        {
          needId: 1,
          needName: "口罩",
          needType: "防护用具",
          userName: "张三",
          isNeedShow: "上线",
          isNeedSolve: "已解决",
        },
        {
          needId: 2,
          needName: "布洛芬",
          needType: "药品",
          userName: "李四",
          isNeedShow: "上线",
          isNeedSolve: "未解决",
        },
        {
          needId: 3,
          needName: "999感冒灵",
          needType: "药品",
          userName: "王五",
          isNeedShow: "下线",
          isNeedSolve: "未解决",
        },
        {
          needId: 4,
          needName: "新型冠状病毒抗原检测试剂",
          needType: "其他",
          userName: "张三",
          isNeedShow: "上线",
          isNeedSolve: "已解决",
        },
      ],
      table: [],
    };
  },
  created() {
    this.getTableData();
  },
  mounted() {},
  computed: {},
  methods: {
   //获取后端表格数据
    getTableData() {
      this.$axios.get("/admin/need", this.tableData).then((res) => {
        this.tableData = res.data;
        // 获取数据后执行一次查询
        this.search();
      });
    }, 
    //查询功能按钮
    search() {
      this.table = this.tableData.filter((data) => {
        return (
          data.needName.match(this.formInline.needName) &&
          data.needType.match(this.formInline.type)
        );
      });
    },
    //重置搜索栏按钮
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    //查看详情按钮
    checkNeed(row) {
      this.$router.push({
        path: "/admin/needDetail",
        query: { needId: row.needId },
      });
    },
    //解决按钮
    async handleSolve(index, row) {
      let res = await this.$axios.post("/admin/need", {
        isNeedSolve: row.isNeedSolve,
      });
      if (res.data.isSolve == 1) {
        this.$message.success("修改成功");
        if (row.isNeedSolve == "未解决") {
          row.isNeedSolve = "已解决";
        } else if (row.isNeedSolve == "已解决") row.isNeedSolve = "未解决";
      } else this.$message.error("修改失败");
    },
    // 展示按钮
    async handleShow(index, row) {
      let res = await this.$axios.post("/admin/need", {
        isNeedShow: row.isNeedShow,
      });
      if (res.data.isShow == 1) {
        this.$message.success("修改成功");
        if (row.isNeedShow == "上线") {
          row.isNeedShow = "下线";
        } else if (row.isNeedShow == "下线") row.isNeedShow = "上线";
      } else this.$message.error("修改失败");
    },
    //删除按钮
    async handleDelete(index, row) {
      let res = await this.$axios.post("/admin/need", {
        needId: row.needId,
      });
      if (res.data.isDelete == 1) {
        this.$message.success("删除成功");
        this.getTableData();
      } else this.$message.error("删除失败");
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
