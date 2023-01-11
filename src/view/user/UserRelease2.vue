<template>
  <div class="table">
    <div class="title">
      <h2>我有多的物资</h2>
    </div>
    <div class="form">

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="提供物资" prop="provide">
          <el-input
            v-model="ruleForm.provide"
            placeholder="请输入您想提供的物资"
          ></el-input>
        </el-form-item>
        <el-form-item label="物资类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="防护用具"></el-radio>
            <el-radio label="药品"></el-radio>
            <el-radio label="其他"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所在位置" prop="location">
          <el-input
            v-model="ruleForm.location"
            placeholder="xx省xx市xx区/县/市xxx（详细地址）"
          ></el-input>
        </el-form-item>

        <el-form-item label="联系方式" prop="contact">
          <el-input
            v-model="ruleForm.contact"
            placeholder="手机：xxx / 微信：xxx"
          ></el-input>
        </el-form-item>
        <el-form-item label="帮助说明" prop="description">
          <el-input
            type="textarea"
            v-model="ruleForm.description"
            placeholder="请简要描述您提供的物资（药物来源等）、能够提供的帮助，让更多有需要的人能够主动联系您。"
            style="font-family: '黑体' !important"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交信息</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        provide: "",
        type: "",
        location: "",
        contact: "",
        description: "",
      },
      rules: {
        provide: [
          {
            required: true,
            message: "请输入您想要提供的物资",
            trigger: "blur",
          },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: "请选择物资类型", trigger: "change" },
        ],
        location: [
          { required: true, message: "请输入您所在位置", trigger: "change" },
        ],
        contact: [
          { required: true, message: "请选择您的联系方式", trigger: "change" },
        ],
        description: [
          { required: true, message: "请输入您的帮助说明", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.table {
  width: 60vw;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.title {
  display: flex;
  justify-content: center;
}
h2 {
  color: #3b3a3a;
  letter-spacing: 10px;
  display: inline-block;
  margin-top: 30px;
}
// 表单样式

.form {
  margin-bottom: 50px;
}
.el-form-item {
  width: 80%;
  margin-top: 30px;
  margin-left: 10%;
  color: #3b3a3a;
  font-weight: 600;
}
</style>