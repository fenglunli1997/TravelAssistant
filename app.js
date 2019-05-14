//app.js
App({
  initData: function(){
    var that = this;
    wx.request({
      url: that.globalData.url_q + 'Province',
      method: 'GET',
      success: function (res) {
        wx.setStorage({
          key: 'provinces',
          data: res.data,
        })
      }
    });
    wx.request({
      url: that.globalData.url_q + 'Town',//
      method: 'GET',
      success: function(res){
        wx.setStorage({
          key: 'towns',
          data: res.data,
        })
      }
    });
    wx.request({
      url: that.globalData.url_q + 'City',
      method: 'GET',
      success: function (res) {
        wx.setStorage({
          key: 'cities',
          data: res.data,
        })
      }
    });
  },

  onLaunch: function () {
    this.initData();
    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        if(code){
          console.log("获取用户登录凭证："+code);
          wx.request({
            url: that.globalData.url + 'LoginServlet',
            data: {code: code},
            success: function(res){
              wx.setStorage({
                key: 'open_id',
                data: res.data.openid,
              });
              // that.globalData.isNewUser = res.data.isNewUser;
              console.log(res);
            }
          })
        }else{
          console.log("获取用户登录凭证失败！");
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              // var nickName = userInfo.nickName;
              // var avatarUrl = userInfo.avatarUrl;
              // var province = userInfo.province;
              // var city = userInfo.city;
              var user = {
                "nickName": res.userInfo.nickName,
                "avatarUrl": res.userInfo.avatarUrl,
                "province": res.userInfo.province,
                "city": res.userInfo.city
              }
              wx.setStorage({
                key: 'user',
                data: user
              });
              // if (that.globalData.isNewUser==1){//这里其实可以不用，直接在服务器上判断是否是新用户然后创建
              //   wx.request({
              //     url: that.globalData.url + 'NewUserServlet',
              //     data: {
              //       "nickName": res.userInfo.nickName,
              //       "avatarUrl": res.userInfo.avatarUrl//不需要城市信息，直接本地显示就ok
              //     }
              //   })
              // }
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    url: 'http://192.168.137.1:8080/TAServer2_war_exploded/',
    url_q: 'http://192.168.137.1:8080/TAServer2_war_exploded/QueryServlet?table=',
    // url: 'https://www.fei149547.com/TAServer2_war_exploded/',
    // url_q: 'https://www.fei149547.com/TAServer2_war_exploded/QueryServlet?table=',
    city: { ciId: 1, ciName: "杭州", prId: 1 },
    province: { prId: 1, prName: "浙江" },
    cities: [],
    // isNewUser: 1,//1代表是
    // open_id: '',
  }
})