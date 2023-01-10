<template>
  <div class="table">
    <div class="title">
      <h2>我有多的物资</h2>
    </div>
    <div class="form">
<<<<<<< HEAD
      <form action="">
        <div class="cell"><h4>提供物资</h4><input type="text"  placeholder="请输入您要提供的物资"/></div>
        <div class="cell">
          <h4 style="margin-right:20px">物资类型</h4>
          <div class="single">
            <label for="type1">防护用具</label
            ><input checked="true" type="radio" name="Group1" id="type1"/>
          </div>
          <div class="single">
          <label for="type2">药品</label
          ><input type="radio" name="Group1" id="type2" />
          </div>
          <div class="single">
          <label for="type3">其他</label
          ><input type="radio" name="Group1" id="type3" />
          </div>
        </div>
        <div class="cell"><h4>所在位置</h4><input type="text"  placeholder="请输入您所在的位置"/></div>
        <div class="cell"><h4>联系方式</h4><input type="text"  placeholder="请输入您的联系方式"/></div>
        <div class="cell">
          <h4 style="margin-right:20px ;">帮助说明</h4
          ><textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style="vertical-align:top;" placeholder="请简要描述您提供的物资（药物来源等），能够提供的帮助，让更多有需要的人能够主动联系您"
          ></textarea>
        </div>
        <div class="lastCell">
          <div style="margin-bottom:15px;"><input type="checkbox" style="vertical-align:middle;"><span style="font-size:12px">我已阅读并同意《隐私政策与免责声明》</span>
          </div>
          
          <button>提交</button>
        </div>
      </form>
=======
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
>>>>>>> origin/aa
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      
=======
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
>>>>>>> origin/aa
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
<<<<<<< HEAD
form {
  display: flex;
  flex-direction: column;
  
}
.cell {
  list-style: none;
  margin-top: 30px;
  margin-left: 25%;
}
input[type="text"] {
  margin-left: 20px;
  height: 25px;
  width: 50%;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  font-family: '黑体';
}
.single {
  display: inline-block;
  margin-right: 10px;
  color: #333;
  label {
    margin-right: 3px;
  }
}
h4 {
  display: inline-block;
  color: #3b3a3a;
}
textarea {
  width: 50%;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  font-family: '黑体';
}
.lastCell {
  margin-top: 30px;
  text-align: center;
}
button {
  height: 30px;
  width: 75px;
  margin-bottom: 40px;
  font-size: 12px;
  cursor: pointer;
  color: #606266;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  background-color: #fff;
}
button:hover {
   
  color: #3da8ff;
}
button:active {
  border: 1px solid #3da8ff;
=======
.form {
  margin-bottom: 50px;
}
.el-form-item {
  width: 80%;
  margin-top: 30px;
  margin-left: 10%;
  color: #3b3a3a;
  font-weight: 600;
>>>>>>> origin/aa
}
</style>