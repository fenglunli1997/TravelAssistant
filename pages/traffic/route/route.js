// var QQMapWX = require("/libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js");
// var qqmapsdk;

let plugin = requirePlugin("myPlugin");
// var that = this;
// let routeInfo = wx.getStorageSync('routeInfo');

// wx.getStorage({
//   key: 'routeInfo',
//   success: function (res) {
//     // that.setData({ r: res.data });
//     routeInfo = res.data
//   },
// });

// let routeInfo = {
//   startLat: 0,    //起点纬度 选填
//   startLng: 0,    //起点经度 选填
//   startName: "我的位置",   // 起点名称 选填
//   endLat: 0,    // 终点纬度必传
//   endLng: 0,  //终点经度 必传
//   endName: "",  //终点名称 必传
//   mode: "car"  //算路方式 选填
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // r: routeInfo,
    routeInfo: {},
    // r: wx.getStorageSync('routeInfo'),
    // routeInfo: wx.getStorageSync('routeInfo'),
    // routeInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    var r = wx.getStorageSync('routeInfo');
    console.log(r);
    that.setData({
      routeInfo: r
    });
    // // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: '4INBZ-PRVRU-5WUVM-B5CDQ-FGXAS-DGBKA'
    // });
    // console.log(this.data.routeInfo);
    // var that = this;
    // wx.getStorage({
    //   key: 'routeInfo',
    //   success: function(res) {
    //     console.log(res);
    //     that.setData({ routeInfo: res.data});
    //   },
    // })

    // var a1 = "routeInfo.startName";
    // var b1 = "routeInfo.startLat";
    // var c1 = "routeInfo.startLng";
    // var d1 = "routeInfo.endName";
    // var e1 = "routeInfo.endLat";
    // var f1 = "routeInfo.endLng";
    // this.setData({
    //   [a1]: options.name0,
    //   [b1]: options.la0,
    //   [c1]: options.lo0,
    //   [d1]: options.name1,
    //   [e1]: options.la1,
    //   [f1]: options.lo1,
    // })

    // var obj = {};
    // obj.startName = options.name0;
    // obj.startLat = options.la0;
    // obj.startLng = options.lo0;
    // obj.endName = options.name1;
    // obj.endLat = options.la1;
    // obj.endLng = options.lo1;
    // this.setData({ routeInfo: obj});
  },

  onShow: function () {
    let plugin = requirePlugin("myPlugin");
  }

})