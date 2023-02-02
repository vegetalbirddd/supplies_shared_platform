<template>
  <div class="userInfo">
    <el-container>
      <el-header>
        <div class="user">
          <img src="../../assets/Home/user.jpg" />
          <div class="wordInfo">
            <p>姓名<span>noni</span></p>
            <p>联系方式<span>12345678901</span></p>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-card class="published">
          <div slot="header" class="clearfix">
            <span>我发布的</span>
            <el-button
              @click="preview"
              style="float: right; padding: 3px 0"
              type="text"
              >下载帮助奖励文件</el-button
            >
          </div>
          <div
            v-for="o in 4"
            :key="o"
            class="text item"
            style="margin-bottom: 15px"
          >
            {{ "物资信息 " + o }}
          </div>
        </el-card>
        <br /><br />
        <el-card class="acquired">
          <div slot="header" class="clearfix">
            <span>已获得的</span>
          </div>
          <div
            v-for="o in 4"
            :key="o"
            class="text item"
            style="margin-bottom: 15px"
          >
            {{ "物资信息 " + o }}
          </div>
        </el-card>
      </el-main>
    </el-container>
    <el-dialog
      title="证书预览和下载"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <div id="pdfDom">
        <div class="proBox">
          <p class="tit"></p>
          <!-- <p class="proid"><span>编号：</span> <span>xxjj2021412</span></p> -->
          <p class="con">
            <span class="con-name">xxx</span>
            同志乐于助人，在疫情期间将自己的物资分享给他人，符合社会主义核心价值观，值得表扬，再接再厉。
          </p>
          <div class="con-unit">
            <p>计算机科学与技术2020级</p>
            <p class="time">202x年xx月xx日</p>
          </div>
          <!-- <p class=" con-footer">xxxxx 监制</p> -->

          <div class="chapter" v-show="isShow">
            <canvas id="chapterCanvas" width="150" height="150"></canvas>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-switch
          inactive-color="#67c23a"
          v-model="downType"
          active-text="图片下载"
          inactive-text="pdf下载"
          style="margin-right: 20px"
        >
        </el-switch>
        <el-checkbox v-model="isShow" style="margin-right: 20px"
          >添加盖章</el-checkbox
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="getPdf('#pdfDom')">下载</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      pageData: null, //接收html格式代码
      htmlTitle: "荣誉证书",
      isShow: true,
      isCanvas: false,
      downType: true, // false为 pdf , true为图片
    };
  },
  created() {},
  computed: {},
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    preview() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        if (!this.isCanvas) {
          // 只绘画一次
          this.isCanvas = true;
          this.getChapter();
        }
      });
    },
    // 生成印章
    getChapter() {
      var canvas = document.getElementById("chapterCanvas");
      var context = canvas.getContext("2d");

      var text = "xxx专用章";
      var companyName = "计算机科学与技术2020级";
      //  context.translate(0, 0);
      // context.clearRect(0, 0, 200, 200);//清除整个画布
      // 绘制印章边框
      var width = canvas.width / 2;
      var height = canvas.height / 2;
      context.lineWidth = 3;
      context.strokeStyle = "#cf0c0c";
      context.beginPath();
      context.arc(width, height, 60, 0, Math.PI * 2); //宽、高、半径
      context.stroke();

      //画五角星
      create5star(context, width, height, 15, "#cf0c0c", 0);

      // 绘制印章名称
      context.font = "20px 宋体";
      context.textBaseline = "middle"; //设置文本的垂直对齐方式
      context.textAlign = "center"; //设置文本的水平对对齐方式
      context.lineWidth = 1;
      context.strokeStyle = "#cf0c0c";
      // context.strokeText(text, width, height + 30); // 名称 xx专用章

      // 绘制印章单位
      context.translate(width, height); // 平移到此位置,
      context.font = "20px 宋体";
      var count = companyName.length; // 字数
      var angle = (5 * Math.PI) / (3 * (count - 1)); // 字间角度
      var chars = companyName.split("");
      var c;
      for (var i = 0; i < count; i++) {
        c = chars[i]; // 需要绘制的字符
        if (i == 0) {
          context.rotate((4 * Math.PI) / 6); // 文字起始位置
        } else {
          context.rotate(angle);
        }

        context.save();
        context.translate(45, 0); // 平移到此位置,此时字和x轴垂直，公司名称和最外圈的距离
        context.rotate(Math.PI / 2); // 旋转90度,让字平行于x轴
        context.strokeText(c, 0, 0); // 此点为字的中心点
        context.restore();
      }

      //绘制五角星
      function create5star(context, sx, sy, radius, color, rotato) {
        context.save();
        context.fillStyle = color;
        context.translate(sx, sy); //移动坐标原点
        context.rotate(Math.PI + rotato); //旋转
        context.beginPath(); //创建路径
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = (Math.PI / 5) * 4;
        for (var i = 0; i < 5; i++) {
          //画五角星的五条边
          var x = Math.sin(i * dig);
          var y = Math.cos(i * dig);
          context.lineTo(x * radius, y * radius);
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.userInfo {
  width: 80vw;
  //   background-color: #f5f5f5;
}
//用户信息样式header部分
.el-header {
  display: block;
  margin-left: 80px;
  margin-bottom: 100px;
  .user {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 20px;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    p {
      font-weight: 600;
      margin-top: 10px;
      font-size: 20px;
      span {
        font-weight: 400;
        margin-top: 10px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
    .wordInfo {
      padding-left: 50px;
    }
  }
}
//奖状信息样式
::v-deep .el-dialog__body {
  padding: 0px;
  display: flex;
  justify-content: center;
}
#pdfDom {
  /* 要想pdf周边留白，要在这里设置 */
  padding: 20px;
  width: 750px;
}
.proBox {
  background: url("../../assets/user/reward.png") no-repeat;
  background-size: cover;
  width: 750px;
  height: 525px;
  padding: 90px 94px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  color: #000;
  font-family: SimSun;
}
.tit {
  color: #cf0c0c;
  font-size: 36px;
  font-weight: 700;
  position: relative;
  top: -6px;
  left: 8px;
  letter-spacing: 20px;
  font-family: STHeiti;
  margin: 20px 0;
}
.proid {
  text-align: right;
  margin: 0;
  font-weight: 500;
  /* margin-right: 5px; */
}
.con {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin: 140px 0;
  line-height: 32px;
  text-indent: 2em;
}
.con-name {
  font-family: 华文行楷, STXingkai;
  border-bottom: 2px solid #000;
}
.con-unit {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;
  letter-spacing: 3px;
}
.con-unit p {
  margin: 5px 0;
}
.con-footer {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 45px;
  left: 0;
  right: 0;
  text-align: center;
}
.chapter {
  border-radius: 50%;
  position: absolute;
  bottom: 75px;
  right: 134px;
}
</style>
