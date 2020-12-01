<template>
  <div id="app">
    <el-carousel direction="horizontal" arrow="always">
      <el-carousel-item v-for="(item, index) in imgsrc" :key="index">
        <img class="nav-img" :src="item.img" />
      </el-carousel-item>
    </el-carousel>

    <div class="home-content">
      <div class="content-body">
        <div class="home-nav-item">
          <div class="index-flex-bar">
            <div class="index-flex-left">

              
              <div
                class="home-nav-box"
                v-for="(item, index) in list"
                :key="index"
              >
                <div class="nav-title-line">
                  <div class="title-left">
                    <div class="nav-item-name" v-text="item.title"></div>
                  </div>
                </div>
                <div class="sub-tabs-tag">
                  <div
                    id="sub-tabs-name"
                    v-for="(childitem, index) in nav1"
                    :key="index"
                  >
                    <span :class="[index == select_nav_index ? 'tabs-active' : '']"
                     v-text="childitem.name"
                    @click="goodItemIclick(childitem, index)"
                     ></span>
                  </div>
                </div>
                <div class="nav-goods-list">
                  <ul>
                    <li v-for="(additem,index) in good_list" :key="index" @click="go(additem, index)">
                      <div class="nav-goods-item">
                        <div class="nav-goods-img">
                          <img :src="additem.img" alt="" />
                        </div>
                        <div class="nav-goods-info">
                          <div class="nav-goods-title">
                            <span>{{additem.title}}</span>
                          </div>
                          <div class="nav-goods-describe">
                            <span
                              >{{additem.text}}</span
                            >
                          </div>
                          <div class="nav-goods-publishinfo">
                            <div class="f-name">{{additem.money}}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>


              <div
                class="home-nav-box"
                v-for="(item, index) in list2"
                :key="index"
              >
                <div class="nav-title-line">
                  <div class="title-left">
                    <div class="nav-item-name" v-text="item.title"></div>
                  </div>
                </div>
                <div class="sub-tabs-tag">
                  <div
                    id="sub-tabs-name"
                    v-for="(childitem, index) in nav2"
                    :key="index"
                  >
                    <span :class="[index == select_nav2_index ? 'tabs-active' : '']"
                     v-text="childitem.name"
                    @click="goodItemIclick2(childitem, index)"
                     ></span>
                  </div>
                </div>
                <div class="nav-goods-list">
                  <ul>
                    <li v-for="(additem,index) in item.addlist" :key="index" @click="go(additem, index)">
                      <div class="nav-goods-item">
                        <div class="nav-goods-img">
                          <img :src="additem.img" alt="" />
                        </div>
                        <div class="nav-goods-info">
                          <div class="nav-goods-title">
                            <span>{{additem.title}}</span>
                          </div>
                          <div class="nav-goods-describe">
                            <span
                              >{{additem.text}}</span
                            >
                          </div>
                          <div class="nav-goods-publishinfo">
                            <div class="f-name">{{additem.money}}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>



              <div
                class="home-nav-box"
                v-for="(item, index) in list3"
                :key="index"
              >
                <div class="nav-title-line">
                  <div class="title-left">
                    <div class="nav-item-name" v-text="item.title"></div>
                  </div>
                </div>
                <div class="sub-tabs-tag">
                  <div
                    id="sub-tabs-name"
                    v-for="(childitem, index) in nav3"
                    :key="index"
                  >
                    <span :class="[index == select_nav3_index ? 'tabs-active' : '']"
                     v-text="childitem.name"
                    @click="goodItemIclick3(childitem, index)"
                     ></span>
                  </div>
                </div>
                <div class="nav-goods-list">
                  <ul>
                    <li v-for="(additem,index) in item.addlist" :key="index" @click="go(additem, index)">
                      <div class="nav-goods-item">
                        <div class="nav-goods-img">
                          <img :src="additem.img" alt="" />
                        </div>
                        <div class="nav-goods-info">
                          <div class="nav-goods-title">
                            <span>{{additem.title}}</span>
                          </div>
                          <div class="nav-goods-describe">
                            <span
                              >{{additem.text}}</span
                            >
                          </div>
                          <div class="nav-goods-publishinfo">
                            <div class="f-name">{{additem.money}}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>




            </div>
          
            <div class="index-flex-right">
              <div class="line-item">
                <div class="home-nav-box">
                  <div class="nav-title-line">
                    <div class="title-left">
                      <div class="nav-item-name">广告传媒</div>
                    </div>
                  </div>
                  <div class="nav-goods-list">
                    <ul>
                      <li v-for="(item,index) in addlist" :key="index" @click="go(additem, index)">
                        <div class="nav-goods-item">
                          <div class="nav-goods-img">
                            <img :src="item.img" alt="" />
                          </div>
                          <div class="nav-goods-info">
                            <div class="nav-goods-title">
                              <span>{{item.title}}</span>
                            </div>
                            <div class="nav-goods-describe">
                              <span>{{item.type}}</span>
                            </div>
                            <div class="nav-goods-publishinfo">
                              <div class="f-name">{{item.money}}</div>
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
          <div class="home-nav-box home-hot-box">
            <div class="nav-title-line">
              <div class="title-left">
                <div class="nav-item-name">最新发布</div>
              </div>
            </div>
            <div class="news-list">
              <ul class="news-list-ul">
                <li v-for="(newitem,index) in newlist" :key="index" @click="go(additem, index)">
                  <div class="news-text-left">
                    <span class="li-icon-img"></span>
                    <div class="li-new-info">
                      <div class="news-text-title">
                        {{newitem.title}}
                      </div>
                      <div class="news-text-desc">
                        {{newitem.text}}
                      </div>
                    </div>
                  </div>
                  <div class="news-text-right">
                    <div class="publish-time">{{newitem.time}}</div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="hot-box">
            <div class="hot-box-title">热点推荐</div>
            <div class="hot-box-list">
              <ul class="hot-box-list-ul">
                <li v-for="(hotitem,index) in hotlist" :key="index">
                  <div class="hot-new-itemline">
                    <div class="hot-new-img">
                      <img :src="hotitem.img" alt="" />
                    </div>
                    <div class="hot-new-title">{{hotitem.title}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      good_list: [],
      select_nav_index:0,
      select_nav2_index:0,
      select_nav3_index:0,
      imgsrc: [
        {
          img: require("../assets/img1.jpg"),
        },
        {
          img: require("../assets/img2.jpg"),
        },
        {
          img: require("../assets/img3.jpg"),
        },
      ],

      nav1:[
        {name:'H5开发'},
        {name:'软件开发'},
        {name:'微信开发'},
        {name:'app软件开发'},
      ],
      nav2:[
        {name:'户外广告牌'},
        {name:'卡片设计'},
        {name:'动漫设计'},
        {name:'LOGO设计'},
      ],
      nav3:[
        {name:'工艺礼品'},
        {name:'平面设计'},
        {name:'展览服务'},
      ],


      list:[
        {
          title:"技术开发",
          addlist:[
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            }
          ]
        }
      ],
      list2:[
        {
          title:"网页设计",
          addlist:[
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            }
          ]
        },
      ],
      list3:[
         {
          title:"广告服务",
          addlist:[
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            },
            {
              img:require("../assets/img4.jpg"),
              title:"H5自适应官网设计定制",
              text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
              money:"2500元起"
            }
          ]
        }
      ],

      addlist:[
        {
          img:require("../assets/img4.jpg"),
          title:"电影广告植入代理",
          type:"电影广告",
          money:"1000元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"电影广告植入代理",
          type:"电影广告",
          money:"1000元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"电影广告植入代理",
          type:"电影广告",
          money:"1000元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"电影广告植入代理",
          type:"电影广告",
          money:"1000元起"
        }
      ],
      newlist:[
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        },
        {
          title:"网站定制开发 网站前端开发",
          text:"网站定制开发 网站前端开发 VUE 网站建设 企业网站",
          time:"2020-05-13"
        }
      ],
      hotlist:[
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"网站定制开发 网站前端开发"
        }
      ]
    };
  },
  methods: {
    goodItemIclick(item,index){
      this.select_nav_index = index
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
    goodItemIclick2(item,index){
      this.select_nav2_index = index
    },
    goodItemIclick3(item,index){
      this.select_nav3_index = index
    },
    go() {
      this.$router.push({ path: "./about" });
    },

    getH5List() {
      let list = [
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2500元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2500元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2500元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2500元起"
        }
      ];
      this.good_list = list;
    },
    getProjectList() {
      let list = [
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2600元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2600元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2600元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2600元起"
        }
      ];
      this.good_list = list;
    },
    getWeCharList() {
      let list = [
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2700元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2700元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2700元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2700元起"
        }
      ];
      this.good_list = list;
    },
    getAppList() {
      let list = [
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2800元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2800元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2800元起"
        },
        {
          img:require("../assets/img4.jpg"),
          title:"H5自适应官网设计定制",
          text:"网站建设企业网站开发H5自适应官网设计定制商城公司网站制作",
          money:"2800元起"
        }
      ];
      this.good_list = list;
    }
  },
  mounted () {
      this.getH5List();
    }
}
</script>

<style>
body {
  background: #f4f4f4;
}
.header_menu {
  min-width: 1200px;
}
.top_bar {
  background: #353535;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 12px;
  margin: 0 auto;
}
.top_bar_item {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gologin {
  color: #fff;
}
.gologin > span {
  margin-right: 20px;
  cursor: pointer;
}
.top_right {
  display: flex;
  align-items: center;
}
.searchbox {
  display: flex;
  align-items: center;
}
.inputbox {
  height: 30px;
  line-height: 30px;
  width: 200px;
  padding: 0 10px;
  background: #fff;
}
.inputbox input {
  height: 23px;
  line-height: 23px;
  width: 100%;
  border: none;
  outline: none;
  background: none;
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
  -webkit-border-radius: 0 2px 2px 0;
  -moz-border-radius: 0 2px 2px 0;
  -ms-border-radius: 0 2px 2px 0;
  -o-border-radius: 0 2px 2px 0;
}
.publish_box {
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: flex-end;
}

.publish_msg {
  margin: 0 20px;
  width: 100px;
  border: 1px solid #3672cc;
  text-align: center;
  color: #3672cc;
  cursor: pointer;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
}
.service_entry {
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
.nav_centerbar {
  background: #fff;
}
.bodyspace {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.home_come_logo {
  font-size: 24px;
  font-weight: bold;
  color: #3ac8eb;
}
.home_come_logo img {
  max-height: 80px;
}
.nav_menu_item {
}
.submenu {
  display: flex;
  align-items: center;
}
.submenuitem {
  font-size: 14px;
  margin-left: 20px;
  min-width: 100px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}
.submenu li span.active {
  color: #353535;
}

.header-menu {
  min-width: 1200px;
}
.el-carousel {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.el-carousel__arrow {
  display: none;
}

.nav-img {
  width: 100%;
  height: 400px;
}
.home-content {
  width: 100%;
  background: #f5f5f5;
}
.content-body {
  width: 1200px;
  margin: 0 auto;
}
.home-nav-item {
  width: 1200px;
  margin: 0 auto;
}
.index-flex-bar {
  display: flex;
}
.index-flex-left {
  width: 75%;
}
.home-nav-box {
  background: #fff;
  padding: 20px 20px 10px 20px;
}
.nav-title-line {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #f9874b;
}

.title-left {
  display: flex;
  align-items: flex-end;
}
.nav-item-name {
  font-size: 18px;
  color: #666;
  margin-right: 20px;
}
.sub-tabs-tag {
  margin-top: 10px;
  display: flex;
}
#sub-tabs-name {
  background: #eee;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 10px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border: 1px solid #ddd;
}
#sub-tabs-name:hover,
.tabs-active {
  color: #f66f42;
}
.nav-goods-list {
  padding-top: 10px;
  min-height: 270px;
}
.home-nav-box .nav-goods-list ul {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.home-nav-box .nav-goods-list ul li {
  width: 25%;
  margin-top: 10px;
}
.nav-goods-item {
  height: 260px;
  margin: 0 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  overflow: hidden;
}
.nav-goods-img {
  height: 150px;
  width: 100%;
  background: #fefefe;
  position: relative;
  z-index: 3;
  overflow: hidden;
}
.nav-goods-img img {
  width: 100%;
  overflow: hidden;
  vertical-align: top;
  height: 150px;
  position: relative;
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -moz-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -ms-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -o-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}
.nav-goods-info {
  padding: 10px;
}
.nav-goods-item .nav-goods-info > div {
  width: 100%;
}
.nav-goods-title {
  font-size: 14px;
  color: #353535;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.nav-goods-info .nav-goods-describe {
  width: 240px;
  margin-top: 6px;
  text-align: left;
  font-size: 12px;
  color: #000;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nav-goods-publishinfo {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 10px;
}
.f-name {
  opacity: 1;
  font-size: 16px;
  color: #f66f42;
  font-weight: bold;
}

.index-flex-right {
  width: 25%;
}
.line-item {
  margin-left: 20px;
}
.home-nav-box {
  background: #fff;
  padding: 20px 20px 10px 20px;
}
.nav-title-line {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #f9874b;
}
.title-left {
  display: flex;
  align-items: flex-end;
}
.home-nav-box .nav-item-name {
  font-size: 18px;
  color: #666;
  margin-right: 20px;
}
.line-item .nav-goods-list {
  margin-top: 0;
  padding-top: 10px;
  min-height: 270px;
}
.line-item .nav-goods-list ul {
  display: block;
}
.line-item .nav-goods-list ul li {
  width: 100%;
}
.nav-goods-item {
  height: 260px;
  margin: 0 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  overflow: hidden;
}
.nav-goods-img {
  height: 150px;
  width: 100%;
  background: #fefefe;
  position: relative;
  z-index: 3;
  overflow: hidden;
}
.nav-goods-img img {
  width: 100%;
  overflow: hidden;
  vertical-align: top;
  height: 150px;
  position: relative;
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -moz-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -ms-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
  -o-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}
.nav-goods-item .nav-goods-info {
  padding: 10px;
}
.nav-goods-item .nav-goods-info > div {
  width: 100%;
}
.nav-goods-title {
  font-size: 14px;
  color: #353535;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.nav-goods-describe {
  width: 240px;
  margin-top: 6px;
  text-align: left;
  font-size: 12px;
  color: #000;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.home-hot-box {
  margin-top: 20px;
}
.nav-title-line {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #f9874b;
}
.nav-title-line .title-left {
  display: flex;
  align-items: flex-end;
}
.home-nav-box .nav-item-name {
  font-size: 18px;
  color: #666;
  margin-right: 20px;
}
.news-list {
  padding: 20px;
}

.news-list-ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  cursor: pointer;
}
.news-text-left {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.news-list-ul li .li-icon-img {
  width: 90px;
  height: 65px;
  margin-right: 10px;
  background: #e7e7e7;
  display: inline-block;
}
.li-new-info {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-text-left .news-text-title {
  font-size: 16px;
  color: #666;
}
.news-text-left .news-text-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.news-text-right {
  min-width: 100px;
}
.publish-time {
  min-width: 100px;
  text-align: right;
  color: #f66f42;
  font-size: 12px;
}

.hot-box {
  margin-top: 20px;
  padding: 20px;
  min-height: 200px;
  background: #fff;
  margin-bottom: 20px;
}
.hot-box-title {
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #f9874b;
}
.hot-box-list {
  padding-top: 20px;
}
.hot-box-list-ul {
  display: flex;
  flex-wrap: wrap;
}
.hot-box-list-ul li {
  width: 16.66666%;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px 0;
}
.hot-box-list-ul li .hot-new-itemline {
  padding: 0 10px;
}
.hot-new-img {
  width: 130px;
  height: 100px;
  border: 1px solid #eee;
  margin: 0 auto;
  overflow: hidden;
}
.hot-new-img img {
  width: 100%;
  vertical-align: top;
}
.hot-new-title {
  margin: 10px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
}

.footbar {
  padding: 20px 0;
  width: 100%;
  background: #303335;
  color: #999;
}
.aboutinfo {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.contentus li:first-child,
.helpbar li:first-child {
  margin-bottom: 10px;
  line-height: 22px;
}
.contentus li,
.helpbar li {
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
  text-align: left;
}
.linkbeian {
  cursor: pointer;
  margin-left: 5px;
}
</style>
