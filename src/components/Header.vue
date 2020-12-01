<template>
  <div class="header-menu">
    <div class="header-menu">
      <div class="top-bar">
        <div class="top-bar-item">
          <div class="gologin">
            <span @click="handleLogin()">会员登录</span>
            <span @click="handleLogin()">会员注册</span>
          </div>
          <div class="top-right">
            <div class="searchbox">
              <div class="inputbox">
                <input type="text" placeholder="请输入搜索内容" />
              </div>
              <div class="searchbtn">搜索</div>
            </div>
            <div class="publishBox">
              <div class="publish-msg">发布信息</div>
              <div class="service-entry">服务商入驻</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-centerbar">
        <div class="bodyspace">
          <div class="home-com-logo">
            <img :src="logos" />
          </div>
          <div class="nav-menu-item">
            <ul class="submenu">
              <li
                class="submenuitem"
                v-for="(item, index) in nav_list"
                @click="handleNavClick(item, index)"
                :key="index"
              >
                <span
                  v-text="item.name"
                  :class="[index == nav_index ? 'active' : '']"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logos: require("../assets/logos.png"),
      nav_list: [
        {
          name: "首页",
          path: "./homePage",
        },
        {
          name: "技术开发",
          path: "./TechnologicalList",
        },
        {
          name: "网页设计",
          path: "./webDesign",
        },
        {
          name: "广告服务",
          path: "./advertisingServices",
        },
        {
          name: "广告传媒",
          path: "./advertisingMedia",
        },
      ],
      nav_index: 0,
    };
  },
  methods: {
    //
    handleLogin() {
      this.$router.push({ path: "./login" });
    },
    handleNavClick(item, index) {
      this.nav_index = index;
      this.$router.push({ path: item.path,query:{name:item.name} });
    },
  },
  mounted() {},
};
</script>
<style>
.active {
  color: #353535;
}
.nav-menu-item .submenu li span {
  display: block;
  cursor: pointer;
  padding: 10px;
}
.nav-menu-item .submenu li span:hover {
  color: #353535;
}
.nav-menu-item .submenu li {
  font-size: 14px;
  margin-left: 20px;
  min-width: 100px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}
.bodyspace .home-com-logo img {
  max-height: 80px;
}
.submenuitem {
}
.submenu {
  display: flex;
  align-items: center;
}
.nav-menu-item {
}
.home-com-logo {
  font-size: 24px;
  font-weight: bold;
  color: #3ac8eb;
}
.bodyspace {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.nav-centerbar {
  background: #fff;
}

.service-entry {
  width: 100px;
  border: 1px solid #f9874b;
  text-align: center;
  color: #f9874b;
  cursor: pointer;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
}
.publish-msg {
  margin: 0 20px;
  width: 100px;
  border: 1px solid #3672cc;
  text-align: center;
  color: #3672cc;
  cursor: pointer;
  border-radius: 2px;
  -webkit-border-radius: 2px;
}

.publishBox {
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: flex-end;
}
.searchbtn {
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  color: #fff;
  width: 60px;
  background: #2a65bd;
  border-radius: 0 2px 2px 0;
}
.inputbox > input {
  height: 23px;
  line-height: 23px;
  width: 100%;
  border: none;
  outline: none;
  background: none;
}
.inputbox {
  height: 30px;
  line-height: 30px;
  width: 200px;
  padding: 0 10px;
  background: #fff;
}
.searchbox {
  display: flex;
  align-items: center;
}
.top-right {
  display: flex;
  align-items: center;
}
.gologin > span {
  margin-right: 20px;
  cursor: pointer;
}
.gologin {
  color: #fff;
}
.top-bar-item {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar {
  background: #353535;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 12px;
  margin: 0 auto;
}
.header-menu {
  min-width: 1200px;
}
</style>
