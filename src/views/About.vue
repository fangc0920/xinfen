<template>
  <div>
    <div class="web-content">
      <div class="web-content-space">
        <div class="flex-layout">
          <div class="layout-left">
            <div class="goods-detail">
              <div class="gd-title" v-text="good_details.title"></div>
              <div class="gd-info">
                <span>发布时间：</span>
                <span v-text="good_details.publishDate"></span>
              </div>
              <div class="gd-content-box">
                <div class="gd-img">
                  <img :src="good_details.img" alt="" />
                </div>
                <div class="gd-text">
                  <ul>
                    <li class="deltail-title" v-text="good_details.name"></li>
                    <li v-text="good_details.address"></li>
                    <li>
                      <span
                        class="sys-pricre"
                        v-text="good_details.price"
                      ></span>
                    </li>
                    <li>
                      <span class="gd-text-title">联系人</span>
                      <span v-text="good_details.contacts"></span>
                    </li>
                    <li>
                      <span class="gd-text-title">联系方式</span>
                      <span
                        class="detail-phone"
                        v-text="good_details.phoneNumer"
                      ></span>
                    </li>
                    <li>
                      <div class="view-content">
                        <img class="phoneimg" :src="phone" />
                        <span class="content-text">立即咨询</span>
                      </div>
                    </li>
                    <li>
                      联系我时，请说明是在
                      <span class="color-sys">新蜂创游</span> 上看到的！
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="more-goods-info">
              <p class="p" v-for="(item, index) in pictureList" :key="index">
                <img :src="item" alt="" />
              </p>
            </div>
          </div>
          <div class="layout-right">
            <div class="recommend-box">
              <div class="rec-list-item">
                <div class="rec-title" v-text="rec_list.title"></div>
                <ul>
                  <li v-for="(item, index) in rec_list.list" :key="index">
                    <div class="rec-goods-list">
                      <div class="rec-goods-view">
                        <div class="rec-list-title" v-text="item.title"></div>
                        <div class="rec-list-info" v-text="item.desc"></div>
                        <div class="rec-list-tips">
                          <span class="f-name"></span>
                          <span class="f-time" v-text="item.time"></span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      phone: require("../assets/phone.png"),
      good_details: {
        title: "网页设计/网站ui",
        publishDate: "2020-05-08 14:48:25",
        img:
          "http://newbeestar.com/uploads/20200609/a7f6ed71c1f672f623d3a1d2e00a2f45.jpg",
        name: "网页设计/网站ui/ 前端H5/响应式/网站开发建设/区块链",
        address: "地址深圳市龙华新区民治街道特区1980文化创意产业园",
        price: "500",
        contacts: "张先生",
        phoneNumer: "0755-8393-7",
      },
      pictureList: [
        "http://newbeestar.com/uploads/20200609/a7f6ed71c1f672f623d3a1d2e00a2f45.jpg",
        "http://newbeestar.com/uploads/20200609/a7f6ed71c1f672f623d3a1d2e00a2f45.jpg",
        "http://newbeestar.com/uploads/20200609/a438b133255b4cd45bdee4d47e59eee6.jpg",
      ],
      rec_list: {
        title: "最新发布",
        list: [
          {
            title: "影视广告",
            desc:
              "构建起以前期策划、创意文稿、前期拍摄，后期制作及传播为核心的完整服务解决方案",
            time: "2020-05-12",
          },
          {
            title: "影视广告",
            desc:
              "构建起以前期策划、创意文稿、前期拍摄，后期制作及传播为核心的完整服务解决方案",
            time: "2020-05-12",
          },
          {
            title: "影视广告",
            desc:
              "构建起以前期策划、创意文稿、前期拍摄，后期制作及传播为核心的完整服务解决方案",
            time: "2020-05-12",
          },
          {
            title: "影视广告",
            desc:
              "构建起以前期策划、创意文稿、前期拍摄，后期制作及传播为核心的完整服务解决方案",
            time: "2020-05-12",
          },
          {
            title: "影视广告",
            desc:
              "构建起以前期策划、创意文稿、前期拍摄，后期制作及传播为核心的完整服务解决方案",
            time: "2020-05-12",
          },
        ],
      },
    };
  },
  methods: {
    goodItemIclick() {
      this.$router.push({ path: "./about" });
    },
  },
};
</script>

<style scoped>
.rec-list-tips {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.rec-list-info {
  width: 100%;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
}
.rec-list-title {
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rec-goods-view {
  width: 100%;
  font-size: 14px;
  margin: 0 10px;
  cursor: pointer;
  overflow: hidden;
}
.rec-goods-list {
  display: flex;
}
.rec-list-item ul li {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.8);
}
.rec-list-item {
  padding: 20px 10px;
}
.rec-title {
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  height: 30px;
  line-height: 30px;
  border-top: 2px solid #f9874b;
  border-bottom: 1px dashed #e6e8eb;
}
.recommend-box {
  font-size: 16px;
  margin-left: 20px;
  background: #fff;
}
.p > img {
  color: rgba(0, 0, 0, 0.6) !important;
  width: 100% !important;
}
.p {
  margin: 0pt;
  text-indent: 0pt;
  padding: 0pt;
  background-image: initial;
  background-position: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
}
.more-goods-info {
  margin-top: 80px;
  padding-top: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.color-sys {
  color: #f9874b;
}
.content-text {
  color: #fff;
  width: 205px;
  font-size: 22px;
  text-align: center;
}
.phoneimg {
  display: inline-block;
  width: 46px;
  padding-right: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
}
.view-content {
  border-radius: 3px;
  background: #ff5722;
  padding: 10px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  max-width: 320px;
  -webkit-border-radius: 3px;
}
.detail-phone {
  font-weight: bold;
  font-size: 18px;
  color: #f9874b;
}
.gd-text-title {
  width: 70px;
  display: inline-block;
  text-align-last: justify;
  text-align: justify;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.6);
}
.sys-pricre {
  font-size: 24px;
  color: #f9874b;
}
.deltail-title {
  font-size: 16px;
}
.gd-text ul li {
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.gd-text {
  margin-left: 30px;
  width: 100%;
}
.gd-img img {
  width: 100%;
  max-height: 300px;
  vertical-align: middle;
}
.gd-img {
  min-width: 400px;
  width: 400px;
  height: 300px;
  border: 1px solid #eee;
  background: #f9f9f9;
}
.gd-content-box {
  width: 100%;
  display: -webkit-flex;
}
.gd-info {
  margin: 10px 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
.gd-title {
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  line-height: 40px;
}
.goods-detail {
  margin-right: 50px;
}
.layout-right {
  width: 35%;
}
.layout-left {
  width: 65%;
  background: #fff;
  padding: 20px;
}
.flex-layout {
  display: flex;
  margin: 40px 0;
}
.web-content-space {
  width: 1100px;
  margin: 0 auto;
  padding: 40px 0;
}
.web-content {
  width: 100%;
  background: #f5f5f5;
}
</style>
