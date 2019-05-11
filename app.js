//app.js
App({
  initData: function(){
    var that = this;
    wx.request({
      url: that.globalData.url_q + 'Town',//
      method: 'GET',
      success: function(res){
        wx.setStorage({
          key: 'town',
          data: res.data,
        })
        // that.globalData.town = res.data;
      }
    });
  },

  onLaunch: function () {
    this.initData();

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
            url: '192.168.137.1:8080/TAServer2/wxlogin',
            data: {code: code}
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
    city: '杭州',//自定义
    url: 'http://192.168.137.1:8080/TAServer2_war_exploded/',
    url_q: 'http://192.168.137.1:8080/TAServer2_war_exploded/QueryServlet?table=',
    // url_q: App.globalData.url + 'http://192.168.137.1:8080/TAServer2_war_exploded/QueryServlet?table=',
    // city_option: 'WHERE CiId =',
    town: [],
    city: { ciId: 1, ciName: "杭州", prId: 1 },
    province: { prId: 1, prName: "浙江" },
  }
})