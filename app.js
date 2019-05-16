App({
  initData: function(){
    var that = this;
    that.globalData.url_q = that.globalData.url + 'QueryServlet?table=';
    that.globalData.url_f = that.globalData.url + 'FavStatusServlet?userId=' + that.globalData.userId + '&type=';
    console.log("that.globalData.url_q：" + that.globalData.url_q);
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
    var that = this;

    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        if(code){
          wx.request({
            url: that.globalData.url + 'LoginServlet?code=' + code,
            success: function(res){
              that.globalData.isNewUser = res.data.isNewUser;
              that.globalData.userId = res.data.sessionId;
              // wx.setStorage({
              //   key: 'sessionId',
              //   data: res.data.sessionId,
              // });
              console.log(res);
              console.log(that.globalData.userId);
              that.initData();
            }
          })
        }else{
          console.log("获取用户登录凭证失败！");
        }
      }
    });
    // // 获取用户信息
    // wx.getSetting({
    //   success: ress => {
    //     if (ress.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log("userInfo:"+res);

    //           if (that.globalData.isNewUser==true){
    //             var that = this;
    //             wx.getStorage({
    //               key: 'sessionId',
    //               success: function (r) {
    //                 wx.request({
    //                   url: that.globalData.url + 'NewUserServlet',
    //                   method: 'GET',
    //                   data: {
    //                     "nickName": res.userInfo.nickName,
    //                     "avatarUrl": res.userInfo.avatarUrl,
    //                     "sessionId": r.data,
    //                   }
    //                 })
    //               },
    //             })
    //           }

    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // console.log("this.globalData.userInfo:" + this.globalData.userInfo)

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },

  globalData: {
    userId: 0,
    userInfo: null,
    url: 'http://192.168.137.1:8080/TAServer2_war_exploded/',
    // url: 'https://www.fei149547.com/TAServer2_war_exploded/',
    url_q: '',
    url_f: '',
    city: { ciId: 1, ciName: "杭州", prId: 1 },//只是默认值
    province: { prId: 1, prName: "浙江" },
    cities: [],
    isNewUser: true,
  }
})