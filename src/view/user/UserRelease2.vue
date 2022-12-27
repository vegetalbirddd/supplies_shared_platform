<template>
  <div class="table">
    <div class="title">
      <h2>我有多的物资</h2>
    </div>
    <div class="form">
      
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
</style>