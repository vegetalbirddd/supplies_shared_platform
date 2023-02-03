<template>
  <div class="login">
    <el-form :model="form" :rules="rules" ref="ruleForm" id="login_box">
      <h2>LOGIN</h2>
      <el-form-item prop="account">
        <el-input placeholder="请输入账号" v-model.number="form.account"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goHome()"
          >登录</el-button
        >
      </el-form-item>
      <span class="sign_up" @click="goSignUp">sign up</span>
    </el-form>
  </div>
</template>
<script >
export default {
  name: "login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      loginLoading: false, //登录状态校验
      rules: {
        account: [
          { required: true, message: "请输入账号" },
          { type: "number", message: "账号必须为数字值" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // if (valid) {
        //   this.loginLoading = true;
        //   //后端接口
        //   this.$axios
        //     .post("/login", this.form)
        //     .then((res) => {
        //       //成功则执行
        //       if (res.data.success) {
        //         try {
        //           sessionStorage.setItem(
        //             "user",
        //             JSON.stringify(res?.data?.data)
        //           );
        //           sessionStorage.setItem("token", res.data.token);
        //         } catch (err) {
        //           console.log(err);
        //         }
        //         console.log(res);
        //         if(res.data.judge){
        //           this.$router.push({
        //           path: "/user",
        //         });
        //         }else {
        //           this.$router.push({
        //           path: "/admin",
        //         });
        //         }
                
        //       } else {
        //         this.$message.error(res.data.msg);
        //         this.loginLoading = false;
        //       }
        //     })
        //     .catch((err) => {
        //       this.$message.error("服务器连接失败，请稍后重试");
        //       this.loginLoading = false;
        //     });
        // } else {
        //   return false;
        // }
        if(valid) {
          this.$router.push("/user");
        }else {
          return false;
        }
      });
    },
    // 重置页面方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //以上
    goHome() {
      this.$router.push("/user");
    },
    goSignUp() {
      this.$router.push("/signUp");
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login/bg.png") no-repeat;
  background-size: 100% 130%;
}

#login_box {
  width: 20%;
  height: 50%;
  position: relative;
  background-color: #00000060;
  margin: auto;
  /* margin-top: 10%; */
  top: 20%;
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
// input {
//   border: 0;
//   width: 60% ;
//   font-size: 15px;
//   color: #fff;
//   background: transparent;
//   border-bottom: 2px solid #fff;
//   padding: 5px 10px;
//   outline: none;
//   margin-top: 10px;
// }
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
.sign_up {
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>