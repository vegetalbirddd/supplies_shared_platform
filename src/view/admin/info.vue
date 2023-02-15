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
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formInline.username"
              placeholder="输入用户名查询"
            ></el-input>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item>
            <el-button
              @click="handleSearch()"
              type="primary"
              icon="el-icon-search"
              >查询</el-button
            >
            <el-button
              icon="el-icon-refresh-right"
              @click="resetForm('formInline')"
              >重置</el-button
            >
            <el-button type="info" icon="el-icon-download" @click="download()">下载</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <!-- 用户表格 -->
    <div class="table">
      <el-table :data="tables" border stripe style="width: 100%">
        <el-table-column prop="id" label="id" min-width="50"> </el-table-column>
        <el-table-column prop="userName" label="用户名" min-width="180">
        </el-table-column>
        <el-table-column prop="userSupNum" label="发布物资数量" min-width="180">
        </el-table-column>
        <el-table-column
          prop="userNeedNum"
          label="发布需求数量"
          min-width="180"
        >
        </el-table-column>
        <el-table-column prop="operate" label="操作" min-width="150">
          <template slot-scope="scope">
            <el-button
              size="medium"
              @click="handleCheck(scope.$index, scope.row)"
              >查看</el-button
            >
            <el-popconfirm
              style="margin-left: 10px"
              confirm-button-text="确定"
              confirm-button-type="danger"
              @confirm="handleDelete(scope.$index, scope.row)"
              cancel-button-text="取消"
              icon="el-icon-info"
              icon-color="red"
              title="确定删除该用户吗？"
            >
              <el-button size="medium" type="danger" slot="reference"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import { getData } from "@/api/api.js";
export default {
  data() {
    return {
      flag: false,
      formInline: {
        username: "",
      },
      tableData: [],
      // tableData: [
      //   {
      //     userid: 1,
      //     username: "noni",
      //     supnum: 7,
      //     neednum: 7,
      //   },
      //   // {
      //   //   userid: 2,
      //   //   username: "n张三",
      //   //   supnum: 62,
      //   //   neednum: 34,
      //   // },
      //   // {
      //   //   userid: 3,
      //   //   username: "李四",
      //   //   supnum: 22,
      //   //   neednum: 11,
      //   // },
      //   // {
      //   //   userid: 4,
      //   //   username: "王五",
      //   //   supnum: 42,
      //   //   neednum: 23,
      //   // },
      // ],
    };
  },
  created() {
    this.fetchUserInfo();
  },
  computed: {
    tables() {
      const input = this.formInline.username;
      if (input && this.flag) {
        this.flag = false;
        return this.tableData.filter((data) => {
          return data.userName.match(this.formInline.username);
        });
      }
      return this.tableData;
    },
  },
  methods: {
    handleSearch() {
      // console.log(this.flag)
      this.flag = true;
    },
    resetForm(form) {
      this.$refs[form].resetFields();
      // console.log(form);
    },
    //下载功能按钮
    download() {
      // console.log('xxx')
      window.location.href = "http://localhost:8081/admin/download/user";
    },
    handleCheck(index, row) {
      this.$router.push({ path: "/admin/infoDetail", query: { id: row.id } });
    },
    handleDelete(index, row) {
      let res = this.$axios.post("/admin/info/delete", {
        id: row.id,
      });
      this.fetchUserInfo();
      this.$message.success("成功删除用户");
    },
    fetchUserInfo() {
      this.$axios({
        method: "get",
        url: "/admin/info",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((res) => {
        this.tableData = res.data.data;
      });
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