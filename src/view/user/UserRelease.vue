<template>
  <div class="table">
    <div class="title">
      <!-- <h3
        v-for="item in titles"
        :key="item.highlight"
        :class="item.highlight == 0 ? 'highlight' : ''"
        @click="goOther"
      >
        {{ item.label }}
      </h3> -->
      <h2>我需要物资</h2>
    </div>
    <div class="form">
      <ul>
        <li><h4>需求物资</h4><input type="text"  placeholder="请输入您需要的物资"/></li>
        <li>
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
        </li>
        <li><h4>所在位置</h4><input type="text"  placeholder="请输入您所在的位置"/></li>
        <li><h4>联系方式</h4><input type="text"  placeholder="请输入您的联系方式"/></li>
        <li>
          <h4 style="margin-right:20px">需求说明</h4
          ><textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style="vertical-align: top" placeholder="请简要描述您的问题，以便更快寻求到帮助"
          ></textarea>
        </li>
        <li><input type="checkbox"><span style="font-size:12px">我已阅读并同意《隐私政策与免责声明》</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: 1,
      titles: [
        {
          highlight: 0,
          name: "INeed",
          label: "我需要物资",
        },
        {
          highlight: 1,
          name: "IHave",
          label: "我有多的物资",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
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
ul {
  margin-left: 20%;
}
li {
  list-style: none;
  margin-top: 30px;
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
</style>