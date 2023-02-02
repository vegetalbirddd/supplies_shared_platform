<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in breadcrumbList"
      :key="'breadcrumb_' + item.path"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    breadcrumbList() {
      return this.$route.matched;
    },
  },
  methods: {},
};
</script>
<style>
</style>
