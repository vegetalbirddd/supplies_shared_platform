<template>
  <div class="bg">
    <div class="top">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline">
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
            <el-button type="primary" icon="el-icon-search">查询</el-button>
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
    <!-- 用户表格 -->
    <div class="table">
       <el-table
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <el-table-column
      prop="userid"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="supnum"
      label="发布物资数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="neednum"
      label="发布需求数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="medium"
          @click="handleCheck()">查看</el-button>
        <el-button
          size="medium"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      formInline: {
        username: "",
      },
       tableData: [{
          userid: 1,
          username: 'noni',
          supnum: 7,
          neednum: 7,
        }, {
          userid: 2,
          username: '张三',
          supnum: 62,
          neednum: 34,
        }, {
          userid: 3,
          username: '李四',
          supnum: 22,
          neednum: 11,
        }, {
          userid: 4,
          username: '王五',
          supnum: 42,
          neednum: 23,
        }]
    };
  },
  created() {},
  computed: {},
  methods: {
    resetForm(form) {
      this.$refs[form].resetFields();
      // console.log(form);
    },
    handleCheck() {
        this.$router.push('/admin/infoDetail');
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
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