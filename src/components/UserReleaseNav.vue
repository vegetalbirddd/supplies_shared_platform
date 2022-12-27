<template>
  <div class="table">
    <div class="title">
      <h3
        v-for="item in titles"
        :key="item.highlight"
        :class="item.highlight == flag ? 'highlight' : ''"
        @click="changeFlag(item.highlight)"
      >
        {{ item.label }}
      </h3>
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
    changeFlag(index) {
      this.flag = index;   
    },
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
h3 {
  cursor: pointer;
  display: inline-block;
  margin-top: 30px;
}
h3:nth-child(odd) {
  margin-right: 20%;
}
h3:hover {
  color: #3da8ff;
}
.highlight {
  color: #3da8ff;
}
</style>