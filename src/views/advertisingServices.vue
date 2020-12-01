<template>
  <div>
    <div class="home-content">
      <div class="list-content-body">
        <div class="category-bar">
          <div class="web-nav">
            <span>首页</span>
            <span>></span>
            <span v-text="name"></span>
          </div>
          <div class="category-list">
            <span>相关分类：</span>
            <span
              class="categoryItem"
              v-for="(item, index) in nav_list"
              @click="navListClick(item, index)"
              :class="[index == select_nav_index ? 'categoryActive' : '']"
              :key="index"
              v-text="item"
            ></span>
          </div>
        </div>

        <div class="goods-list">
          <div class="list-flex-leftitem">
            <ul>
              <li
                v-for="(item, index) in good_list"
                :key="index"
                @click="goodItemIclick(item, index)"
              >
                <div class="goods-list-item">
                  <div class="leftBox">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="rightBox">
                    <div>
                      <div class="f-title" v-text="item.title"></div>
                      <div class="f-info" v-text="item.desc"></div>
                    </div>
                    <div class="f-datainfo">
                      <span class="f-name" v-text="item.price + '元起'"></span>
                      <span class="f-fans"></span>
                      <span class="f-time" v-text="item.time"></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="pagenation">
              <div class="prepage" v-text="right"></div>
              <div class="loaclpage">1</div>
              <div class="nextpage" v-text="left"></div>
            </div>
          </div>
          <div class="list-flex-rightitem">
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
  name: "technologicalList",
 
  data() {
    return {
      left: ">",
      right: "<",
      nav_list: ["H5开发", "软件开发", "微信开发", "app软件开发"],
      good_list: [],
      name:'',
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
      select_nav_index: 0,
    };
  },
  methods: {
    goodItemIclick() {
      this.$router.push({ path: "./about" });
    },
    navListClick(item, index) {
      this.select_nav_index = index;
      switch (index) {
        case 0:
          this.getH5List();
          break;
        case 1:
          this.getProjectList();
          break;
        case 2:
          this.getWeCharList();
          break;
        case 3:
          this.getAppList();
          break;
        default:
          break;
      }
    },
    getH5List() {
      let list = [
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
      ];
      this.good_list = list;
    },
    getProjectList() {
      let list = [
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "软件开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "软件开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "软件开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "软件开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
      ];
      this.good_list = list;
    },
    getWeCharList() {
      let list = [
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "微信开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "微信开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "微信开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "H5自适应官网设计定制",
          desc: "微信开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
      ];
      this.good_list = list;
    },
    getAppList() {
      let list = [
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "app开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "app开发好啊",
          desc: "微信开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "app开发好啊",
          desc: "网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          price: "2500",
          time: "2020-11-30",
        },
        {
          img:
            "http://newbeestar.com/uploads/20200609/2af46f74496e01f1c4647a1400783ab5.jpg",
          title: "app开发好啊",
          desc: "微信开发好啊",
          price: "2500",
          time: "2020-11-30",
        },
      ];
      this.good_list = list;
    },
  },
  mounted() {
    this.getH5List();
     this.name=this.$route.query.name
  },
};
</script>

<style scoped>
.categoryActive {
  color: #fff !important;
  background: #75a7f1 !important;
}
.prepage {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  font-size: 16px;
  color: #999;
  cursor: pointer;
}
.loaclpage {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  background: #f9874b;
}
.nextpage {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  font-size: 16px;
  color: #999;
  cursor: pointer;
}
.pagenation {
  margin: 50px auto;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  width: 154px;
}
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
.web-nav {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.home-content {
  width: 100%;
  background: #f5f5f5;
}
.technologicalList {
  width: 100%;
  background: #f5f5f5;
}
.list-content-body {
  width: 1200px;
  margin: 40px auto;
}
.category-bar {
  background: #fff;
  padding: 20px;
}
.category-list {
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
.categoryItem {
  margin-right: 10px;
  cursor: pointer;
  padding: 2px 10px;
  background: #eee;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
}
.goods-list {
  display: flex;
  margin: 40px 0;
}
.list-flex-leftitem {
  margin-right: 50px;
  width: 70%;
}
.list-flex-rightitem {
  width: 30%;
}
.goods-list ul {
  width: 100%;
}
.goods-list ul li {
  margin-bottom: 10px;
  background: #fff;
}
.goods-list-item {
  display: flex;
  padding: 20px;
  cursor: pointer;
}


.leftBox {
  margin-right: 20px;
  width: 200px;
  background: #e7e7e7;
  min-width: 200px;
  height: 140px;
  overflow: hidden;
  border: 1px solid #eee;
}
.leftBox > img {
  width: 100%;
  background-size: contain;
  vertical-align: center;
}
.f-title {
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.f-title:hover{
  color: red;
}

.f-info {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.rightBox {
  width: 100%;
  display: flex;
  height: 140px;
  flex-direction: column;
  justify-content: space-between;
}
.f-datainfo {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.f-datainfo > span {
  margin-right: 5px;
}
.f-name {
  color: #f9874b;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
}
.f-time {
  color: rgba(0, 0, 0, 0.6);
}
.recommend-box {
  font-size: 16px;
  background: #fff;
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
</style>
