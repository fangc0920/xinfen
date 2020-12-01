<template>
  <div class="main-box">
    <div class="login-box" v-if="flag">
      <div class="tabs-title">
        <div class="item active">登录</div>
        <div class="item" @click="change">注册</div>
      </div>
      <div class="loginitem">
        <div class="line">
          <span class="title">账号</span>
          <div class="content">
            <input type="text" />
          </div>
        </div>
        <div class="line">
          <span class="title">密码</span>
          <div class="content">
            <input type="password" />
          </div>
        </div>
        <div class="submibtn">
          <div class="gologin">登录</div>
          <div class="reback">
            <span>返回首页</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="login-box" v-else>
      <div class="tabs-title">
        <div class="item " @click="login">登录</div>
        <div class="item active">注册</div>
      </div>
      <div class="loginitem">
        <div class="line">
          <span class="title">邮箱</span>
          <div class="content">
            <input type="text" />
          </div>
        </div>
        <div class="line">
          <span class="title">用户名</span>
          <div class="content">
            <input type="texxt" />
          </div>
        </div>
        <div class="line">
          <span class="title">手机号</span>
          <div class="content">
            <input type="texxt" />
          </div>
        </div>
        <div class="line">
          <span class="title">密码</span>
          <div class="content">
            <input type="password" />
          </div>
          
        </div>
        <div class="line codeline">
          <div class="codeinput">
            <input type="text" />
          </div>
          <div class="codebox">
            <canvas id="mycanvas" placeholder="请输入验证码" width="80" height="32"></canvas>
          </div>
        </div>


        <div class="submibtn">
          <div class="gologin">登录</div>
          <div class="reback">
            <span>返回首页</span>
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
      flag:1,
      active: 1
    //   loginForm: {
    //     account: "",
    //     password: "",
    //   },
    //   registerForm: {
    //     email: "",
    //     username: "",
    //     password: "",
    //     mobile: "",
    //     code: "",
    //   },
    //   ischeck: true,
    //   mycanvas: "",
    //   codeVal: "",
    };
  },
  // watch: {
  //   active(cval) {
  //     if (cval == 2) {
  //       this.$nextTick(() => {
  //         this.clickChange();
  //       });
  //     }
  //   },
  // },
  mounted: function () {
  },
  methods: {
    change(){
      
      this.flag=!this.flag
    },
    login(){
      this.flag = 1
    }
    // gologin() {
    //   var params = {
    //     account: this.loginForm.account,
    //     password: this.loginForm.password,
    //   };
    //   if (!this.loginForm.account || !this.loginForm.password) {
    //     alert("请输入账号或密码");
    //     return;
    //   }
    //   if (this.loginForm.password.length < 6) {
    //     alert("密码至少6位");
    //     return;
    //   }
    //   axiosPostRequst(config.apilist.login, params).then((res) => {
    //     var data = res.data;
    //     if (data.code == 200) {
    //       var userInfo = {
    //         token: data.data.token,
    //         userName: this.loginForm.account,
    //       };
    //       document.cookie = "userInfo=" + JSON.stringify(userInfo) + "; path=/";
    //       window.location.href = config.homeUrl;
    //     } else {
    //       alert(data.msg);
    //     }
    //   });
    // },
    // goback() {
    //   window.location.href = config.homeUrl;
    // },
    // goRegister() {
    //   var params = {
    //     email: this.registerForm.email,
    //     username: this.registerForm.username,
    //     password: this.registerForm.password,
    //     mobile: this.registerForm.mobile,
    //   };
    //   if (!this.ischeck) {
    //     alert("请同意用户协议");
    //     return;
    //   }
    //   if (
    //     !this.registerForm.email ||
    //     !this.registerForm.username ||
    //     !this.registerForm.password ||
    //     !this.registerForm.mobile
    //   ) {
    //     alert("请完善注册信息");
    //     return;
    //   }
    //   var emailStr = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
    //   if (!emailStr.test(this.registerForm.email)) {
    //     alert("邮箱格式不对！");
    //     return;
    //   }
    //   var phoneStr = /^1[3456789]\d{9}$/;
    //   if (!phoneStr.test(this.registerForm.mobile)) {
    //     alert("手机号码有误，请重填");
    //     return;
    //   }
    //   if (this.registerForm.password.length < 6) {
    //     alert("密码至少6位");
    //     return;
    //   }
    //   if (this.registerForm.code) {
    //     if (this.registerForm.code != this.codeVal) {
    //       alert("验证码错误");
    //       return;
    //     }
    //   } else {
    //     alert("请输入验证码");
    //     return;
    //   }
    //   axiosPostRequst(config.apilist.register, params).then((res) => {
    //     var data = res.data;
    //     if (data.code == 200) {
    //       alert("注册成功！");
    //       window.location.reload();
    //     } else {
    //       alert(data.msg);
    //     }
    //   });
    // },
    // goviewPage() {
    //   window.open("/pages/agreement/yinsi.html", "_blank");
    // },
    // rand() {
    //   var str = "abcdefghijklmnopqrstuvwxyz0123456789";
    //   var arr = str.split("");
    //   var validate = "";
    //   var ranNum;
    //   for (var i = 0; i < 4; i++) {
    //     ranNum = Math.floor(Math.random() * 36); //随机数在[0,35]之间
    //     validate += arr[ranNum];
    //   }
    //   this.codeVal = validate;
    //   return validate;
    // },
    // rn(min, max) {
    //   var n = Math.random() * (max - min) + min;
    //   return Math.floor(n);
    // },
    // rc(min, max) {
    //   var r = this.rn(min, max);
    //   var g = this.rn(min, max);
    //   var b = this.rn(min, max);
    //   return `rgb(${r},${g},${b})`;
    // },
    // clickChange() {
    //   this.mycanvas = document.getElementById("mycanvas");
    //   var cxt = this.mycanvas.getContext("2d");
    //   var w = mycanvas.width;
    //   var h = mycanvas.height;
    //   cxt.fillRect(0, 0, w, h);
    //   cxt.fillStyle = this.rc(190, 230);
    //   /*生成干扰线20条*/
    //   for (var j = 0; j < 20; j++) {
    //     cxt.strokeStyle = this.rc(0, 255);
    //     cxt.beginPath();
    //     cxt.moveTo(this.rn(0, w), this.rn(0, h));
    //     cxt.lineTo(this.rn(0, w), this.rn(0, h));
    //     cxt.lineWidth = 0.1;
    //     cxt.closePath();
    //     cxt.stroke();
    //   }
    //   cxt.font = "30px SimHei";
    //   cxt.fillStyle = this.rc(0, 170);
    //   cxt.textBaseline = "top";
    //   cxt.fillText(this.rand(), 15, 0);
    // },
    // changecode(e) {
    //   e.preventDefault(); //阻止鼠标点击发生默认的行为
    //   this.clickChange();
    // },
  },
};
</script>

<style scoped>
.main-box {
  background: url(../assets/login-banner.jpg) no-repeat center center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
.login-box {
  width: 320px;
  background: #fff;
  padding: 0 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}
.tabs-title {
  padding: 10px 0;
  height: 36px;
  line-height: 36px;
  display: flex;
  display: -webkit-flex;
  border-bottom: 1px solid #dcdfe6;
}
.tabs-title .item {
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: #1f2f3d;
}
.tabs-title .active {
  color: #67c23a;
}
.tabs-title .item:first-child {
  border-right: 1px solid #dcdfe6;
}
.loginitem {
  padding: 20px;
  font-size: 14px;
}
.line {
  margin-bottom: 20px;
}
.line .title {
  display: block;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 5px;
}
.line .content {
  height: 30px;
  line-height: 30px;
  border: 1px solid #dcdfe6;
  padding: 0 10px;
}
.line .content input {
  border: none;
  outline: none;
  width: 100%;
  height: 21px;
}
.line .content input {
  border: none;
  outline: none;
  width: 100%;
  height: 21px;
}
.submitbtn {
  padding: 10px 0 20px 0;
}
.gologin {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #67c23a;
  color: #fff;
  letter-spacing: 6px;
  border-radius: 5px;
  cursor: pointer;
}
.reback {
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
}
.reback span {
  cursor: pointer;
}

.codeline{
	display: flex;
}

.codeinput{
	width: 100%;
	height: 30px;
	line-height: 30px;
	border:1px solid #dcdfe6;
	padding: 0 10px;
}
.codeinput input{
	background: none;
	border: none;
	outline: none;
}
</style>
