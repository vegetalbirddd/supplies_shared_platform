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
          <el-form-item label="物资名称" prop="supname">
            <el-input
              v-model="formInline.supname"
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
        <el-table-column prop="supid" label="序号" min-width="50">
        </el-table-column>
        <el-table-column prop="supname" label="物资名称" min-width="180">
        </el-table-column>
        <el-table-column prop="suptype" label="物资类型" min-width="70">
        </el-table-column>
        <el-table-column prop="supuser" label="发布用户" min-width="150">
        </el-table-column>
        <el-table-column prop="situation" label="展示情况" min-width="70">
        </el-table-column>
        <el-table-column prop="solve" label="解决情况" min-width="70">
        </el-table-column>
        <el-table-column prop="operate" label="操作" min-width="300">
          <template slot-scope="scope">
            <el-button size="medium" @click="checkSup()">查看</el-button>
            <el-button size="medium" type="success">解决</el-button>
            <el-button size="medium" type="warning">展示</el-button>
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
        supname: "",
        type: "",
      },
      tableData: [
        {
          supid: 1,
          supname: "口罩",
          suptype: "防护用具",
          supuser: "张三",
          situation: "上线",
          solve: "已解决",
        },
        {
          supid: 2,
          supname: "布洛芬",
          suptype: "药品",
          supuser: "李四",
          situation: "上线",
          solve: "未解决",
        },
        {
          supid: 3,
          supname: "999感冒灵",
          suptype: "药品",
          supuser: "王五",
          situation: "下线",
          solve: "未解决",
        },
        {
          supid: 4,
          supname: "新型冠状病毒抗原检测试剂",
          suptype: "其他",
          supuser: "张三",
          situation: "上线",
          solve: "已解决",
        },
      ],
      table: [],
    };
  },
  mounted() {
    this.search();
  },
  computed: {},
  methods: {
    search() {
      this.table = this.tableData.filter((data) => {
        return (
          data.supname.match(this.formInline.supname) &&
          data.suptype.match(this.formInline.type)
        );
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
    checkSup() {
      this.$router.push("/admin/supDetail");
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
