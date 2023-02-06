<template>
  <div>
    <!-- 第一部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>用户详情</h3>
        <el-button @click="back()">返回</el-button>
      </div>
      <div class="user-bottom">
        <img class="avatar" src="../../assets/Home/user.jpg" alt="" />
        <h3>{{ editForm.userName }}</h3>
        <p>
          发布&nbsp;&nbsp;&nbsp;物资&nbsp;{{
            editForm.userSupNum
          }}&nbsp;|&nbsp;需求&nbsp;{{ editForm.userNeedNum }}
        </p>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>基础信息</h3>
        <el-button @click="show()" plain>编辑</el-button>
      </div>
      <el-row>
        <el-col :span="8"
          ><div>账号：{{ editForm.userAccount }}</div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">
            id：{{ editForm.userId }}
          </div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            发布物资数：{{ editForm.userSupNum }}
          </div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">
            手机号码：{{ editForm.userPhoneNum }}
          </div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            发布需求数：{{ editForm.userNeedNum }}
          </div></el-col
        >
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            联系地址：{{ editForm.userAddress }}
          </div></el-col
        >
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <!-- 编辑信息对话框 -->
    <el-dialog title="基础信息" :visible.sync="edit" @close="handleClose()">
      <el-form ref="editFormRef" :model="editForm" :rules="editFormRules">
        <el-form-item
          label="用户名"
          :label-width="formLabelWidth"
          prop="userName"
        >
          <el-input v-model="editForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="性别" :label-width="formLabelWidth" prop="userSex">
          <el-select v-model="editForm.userSex">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item
          label="手机号码"
          :label-width="formLabelWidth"
          prop="userPhoneNum"
        >
          <el-input
            v-model="editForm.userPhoneNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系地址"
          :label-width="formLabelWidth"
          prop="userAddress"
        >
          <el-input
            v-model="editForm.userAddress"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSave()">保存</el-button>
        <el-button @click="handleClose()">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 第三部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>发布物资</h3>
      </div>
      <div v-for="(item, index) in supName" :key="index" class="item">
        - {{ item }}
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="bg">
      <div class="user-top">
        <h3>发布需求</h3>
      </div>
      <div v-for="(item, index) in needName" :key="index" class="item">
        - {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false, //校验是否处于编辑状态
      formLabelWidth: "120px",
      editForm: {
        userId: 1,
        userName: "xxx",
        userAccount: 12345,
        userSupNum: 1,
        userNeedNum: 2,
        // userSex: "未填写",
        userPhoneNum: "未填写",
        userAddress: "未填写",
      },
      supName: [],
      needName: [],
      // 修改表单的验证规则
      editFormRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getUserList();
  },
  computed: {},
  methods: {
    show() {
      this.edit = true;
    },
    // async getUserList() {
    //   const { data: res } = await this.$axios.get("/admin/infoDetail", {
    //     params: this.queryInfo,
    //   });
    //   if (res.meta.status !== 200) return this.$message.error("数据获取失败");
    //   this.userList = res.data.users;
    //   this.total = res.data.total;
    //   console.log(res);
    // },
    getUserList() {
      this.$axios({
        method: "get",
        url: "/admin/infoDetail",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((res) => {
        this.editForm = res.data;
        this.supName = res.data.supName;
        this.needName = res.data.needName;
        console.log(res);
      });
    },
    handleSave() {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        // 发起修改用户信息的数据请求
        const res = await this.$axios
          .put("/admin/infoDetail", {
            userName: this.editForm.userName,
            userSex: this.editForm.userSex,
            userPhoneNum: this.userPhoneNum,
            userAddress: this.editForm.userAddress,
          })
          .then((res) => {
            // 请求成功
            // console.log(res);
            if (res) {
              // 刷新数据列表
              this.getUserList();
              // 提示修改成功
              this.$message.success("更新用户信息成功！");
              // 关闭对话框
              this.edit = false;
            } else {
              this.$message.error("更新用户信息失败！");
              this.edit = true;
            }
          })
          .catch((err) => {
            // 请求失败，保持不关闭对话框
            this.edit = true;
            return this.$message.error("服务器连接失败，请稍后重试");
          });
      });
    },
    handleClose() {
      this.$refs.editFormRef.resetFields();
      this.edit = false;
    },
    back() {
      this.$router.push("/admin/info");
    },
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
}
.user-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.user-bottom {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #444;
  }
  p {
    color: #888;
    font-size: 15px;
    // padding-right: 45px;
  }
}
h3 {
  color: #555;
}
.avatar {
  width: 15%;
  border-radius: 100%;
}
.el-row,
.item {
  margin-bottom: 20px;
  color: #333;
}
.el-col {
  margin-right: 15px;
}
.el-input,
.el-select {
  width: 85% !important;
}
</style>