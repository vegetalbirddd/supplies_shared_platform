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
          <el-form-item label="需求名称" prop="needname">
            <el-input
              v-model="formInline.needname"
              placeholder="输入需求名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="需求类型" prop="type">
            <el-select v-model="formInline.type" placeholder="请选择需求类型">
              <el-option label="防护用具" value="type1"></el-option>
              <el-option label="药品" value="type2"></el-option>
              <el-option label="其他" value="type3"></el-option>
            </el-select>
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
    <div class="table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="needid" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="needname" label="需求名称" width="180">
        </el-table-column>
        <el-table-column prop="needtype" label="需求类型" width="180">
        </el-table-column>
        <el-table-column prop="needuser" label="发布用户" width="180">
        </el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button size="medium" @click="checkNeed()">查看</el-button>
            <el-button size="medium" type="success">上线</el-button>
            <el-button size="medium" type="warning">下线</el-button>
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
      formInline: {
        needname: "",
        type: "",
      },
      tableData: [
        {
          needid: 1,
          needname: "护目镜",
          needtype: "防护用具",
          needuser: "王五",
        },
        {
          needid: 2,
          needname: "感康",
          needtype: "药品",
          needuser: "李四",
        },
        {
          needid: 3,
          needname: "维生素c",
          needtype: "其他",
          needuser: "张三",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    checkNeed(){
      this.$router.push('/admin/needDetail')
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
