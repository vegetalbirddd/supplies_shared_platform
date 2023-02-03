<template>
  <div class="signup">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      id="signup_box"
    >
      <h2>Sign Up</h2>
      <el-form-item prop="account">
        <el-input
          placeholder="请输入账号"
          v-model.number="ruleForm.account"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model="ruleForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          placeholder="请再次输入密码"
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister()">注册</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
      <span class="back" @click="back">back</span>
    </el-form>
  </div>
</template>
<script >
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false, //注册状态校验
      ruleForm: {
        account: "",
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号" },
          { type: "number", message: "账号必须为数字值" },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    //elementui提供的提交功能
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    handleRegister() {
      this.$refs.ruleForm.validate((valid) => {
        // 获取signForm的实例，找到validate方法，根据验证规则rules校验是否valid
        if (valid) {
          this.loading = true;
          this.$axios({
            method: "post",
            url: "/signUp",
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            data: {
              userAccount: this.ruleForm.account,
              userName: this.ruleForm.username,
              userPasswd: this.ruleForm.pass,
            },
          })
            .then((res) => {
              //请求成功后执行函数
              if (res.data.success) {
                this.$router.push("/login"); //登录验证成功路由实现跳转
                this.$message.success("注册成功啦，可以登录咯");
              } else {
                console.log(res);
                this.$message.error(res.data.msg);
              }
            })
            .catch(() => {
              this.$message.error("服务器连接失败，请稍后重试");
              this.loading = false;
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          this.loading = false;
          return false;
        }
      });
    },
    back() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.signup {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login/bg.png") no-repeat;
  background-size: 100% 130%;
}

#signup_box {
  width: 20%;
  // height: 50%;
  position: relative;
  background-color: #00000060;
  margin: auto;
  // margin-top: 10%;
  top: 15%;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}

h2 {
  color: #fff;
  margin-top: 5%;
  margin-bottom: 5%;
}
.el-form-item {
  margin-bottom: 5%;
}
#input-box {
  margin-top: 5%;
}

span {
  color: #fff;
}
/deep/ .el-input__inner {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  color: #fff;
}
button {
  width: 100%;
  border: 1px solid #38a6fa;
  background-color: #38a6fa;
  margin-top: 10%;
}

button:hover {
  border: 1px solid #b6ddfb;
  background-color: #b6ddfb;
}

button:active {
  border: 1px solid #8cc8f7;
  background-color: #8cc8f7;
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}
.back {
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>