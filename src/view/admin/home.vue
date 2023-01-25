<template>
  <div>
    <div>
      <ul class="cards">
        <li style="margin-right: 10%">
          <div>
            <img src="../../assets/icon/user.png" alt="" />
          </div>
          <h4 style="margin-bottom: 5px">123124241</h4>
          <p style="font-size: 14px; color: #666">用户数量</p>
        </li>
        <li style="margin-right: 10%">
          <div>
            <img src="../../assets/icon/sup.png" alt="" />
          </div>
          <h4 style="margin-bottom: 5px">99889898</h4>
          <p style="font-size: 14px; color: #666">发布物资数量</p>
        </li>
        <li>
          <div>
            <img src="../../assets/icon/need.png" alt="" />
          </div>
          <h4 style="margin-bottom: 5px">898787</h4>
          <p style="font-size: 14px; color: #666">发布需求数量</p>
        </li>
      </ul>
    </div>
    <div class="echarts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: #fff;
}
li {
  list-style: none;
  display: inline-block;
  width: 20%;
  height: 60%;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 3px;
  box-shadow: #bbb 3px 3px 5px, rgb(234, 234, 234) -3px -3px 5px;
  div {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 12%;
    img {
      width: 40%;
    }
  }
  p,
  h4 {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
li:hover {
  box-shadow: #999 5px 5px 5px, #bbb -3px -3px 5px;
}
</style>
