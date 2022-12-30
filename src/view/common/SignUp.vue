<template>
  <div class="signup">
    <div id="signup_box">
      <h2>Sign Up</h2>
      <div id="input_box">
        <input type="text" placeholder="请输入用户名"/>
      </div>
      <div class="input_box">
        <input type="password" placeholder="请输入密码"/>
      </div>
      <button @click="goLogin">注 册</button><br/>
    </div>
  </div>
</template>
<script >
export default {
  name: "signup",
  methods: {
     goLogin(){
        this.$router.push('/login');
     },
  },
};
</script>
<style lang="less" scoped>
.signup {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login/bg.png")
    no-repeat;
  background-size: 100% 130%;
}

#signup_box {
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
}

#input-box {
  margin-top: 5%;
}

span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */

  color: rgb(225, 225, 225);
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */

  color: rgb(225, 225, 225);
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */

  color: rgb(225, 225, 225);
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */

  color: rgb(225, 225, 225);
}

input::-ms-input-placeholder {
  /* Microsoft Edge */

  color: rgb(225, 225, 225);
}

button {
  cursor: pointer;
  margin-top: 50px;
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-color: #8cc8f7;
}

button:hover {
  background-color: #b6ddfb;
}

button:active {
    background-color: #8cc8f7;
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}

</style>