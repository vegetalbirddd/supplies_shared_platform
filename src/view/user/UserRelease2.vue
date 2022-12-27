<template>
  <div class="table">
    <div class="title">
      <h2>我有多的物资</h2>
    </div>
    <div class="form">
      <ul>
        <li><span>提供物资</span><input type="text" /></li>
        <li><span>物资类型</span>
        <label for="type1">防护用具</label><input checked="true" type="radio" name="Group1" id="type1"/>
        <label for="type2">药品</label><input type="radio" name="Group1" id="type2"/>
        <label for="type3">其他</label><input type="radio" name="Group1" id="type3"/>
        </li>
        <li><span>所在位置</span><input type="text" /></li>
        <li><span>联系方式</span><input type="text" /></li>
        <li>
          <span>帮助说明</span
          ><textarea name="" id="" cols="30" rows="10" style="vertical-align:top;"></textarea>
        </li>
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
  methods: {
  },
};
</script>
<style lang="less" scoped>
.table {
  width: 60vw;
  height: 600px;
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
li {
  list-style: none;
}
</style>