<template>
  <div class="footbar">
    <div class="aboutinfo">
      <ul class="contentus">
        <li>
          <span>电话：</span>
          <span>13424430286</span>
          <span class="email">邮箱：</span>
          <span>370152656@qq.com</span>
        </li>
        <li>
          <span>© 2020</span>
          <span>新蜂创游</span>
          <span>
            版权所有
            <span>粤ICP备19107234号-2</span>
            <span class="email">联系地址：</span>
            <span>广东省深圳市龙岗区龙城街道百合盛世10栋16A</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logos: require("../assets/logos.png"),
      nav_list: ["首页", "技术开发", "网页设计", "广告服务", "广告传媒"],
      nav_index: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style>
.linkbeian {
  cursor: pointer;
  margin-left: 5px;
}
.email {
  margin-left: 15px;
}
.contentus li:first-child,
.helpbar li:first-child {
  margin-bottom: 10px;
  line-height: 22px;
}
.contentus {
}
.aboutinfo {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.footbar {
  padding: 20px 0;
  width: 100%;
  background: #303335;
  color: #999;
}
</style>
