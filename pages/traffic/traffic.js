// pages/Traffic/Traffic.js
// var QQMapWX = require('../../libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');
// var qqmapsdk;

Page({
  data: {
    name: ['当前位置',' '],
    markers: [{
      latitude: 0,
      longitude: 0,
      iconPath: "../../icon/定位.png",
      width: 30,
      height: 30,
      id: 0,
    },{
      latitude: 0,
      longitude: 0,
      iconPath: "../../icon/定位.png",
      width: 30,
      height: 30,
      id: 1,
    }],

    // polyline: [{
    //   points: [{
    //     latitude: 0,
    //     longitude: 0,
    //   }, {
    //     latitude: 0,
    //     longitude: 0,
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: 'true',
    // }],

    // time_h: 2,
    // time_min: 10,

  },

  route: function(){
    wx.openLocation({
      latitude: this.data.markers[0].latitude,
      longitude: this.data.markers[0].longitude,
    })
  },

  locate: function(e){
    var that = this;
    var no = e.currentTarget.dataset.no;
    wx.chooseLocation({
      success: function(res) {
        var a = "name[" + no + "]";
        var b = "markers[" + no + "].latitude";
        var c = "markers[" + no + "].longitude";
        that.setData({
          [a]: res.name,
          [b]: res.latitude,
          [c]: res.longitude,
        });
      },
    });
  },

  route: function(){
    var a = "name0=" + this.data.name[0] + "&&la0=" + this.data.markers[0].latitude + "&&lo0=" + this.data.markers[0].longitude;
    var b = "name1=" + this.data.name[1] + "&&la1=" + this.data.markers[1].latitude + "&&lo1=" + this.data.markers[1].longitude;
    wx.navigateTo({
      url: 'route/route?' + a + "&&" + b,
    })
  },

  // search: function(){
  //   this.route();//
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: '4INBZ-PRVRU-5WUVM-B5CDQ-FGXAS-DGBKA'
    // });

    wx.getLocation({
      success: (res) => {
        this.setData({
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude
        });
      },
    });

  },

  // onShow: function () {
  //   // 调用接口
  //   qqmapsdk.search({
  //     keyword: '酒店',
  //     success: function (res) {
  //       console.log(res);
  //     },
  //     fail: function (res) {
  //       console.log(res);
  //     },
  //     complete: function (res) {
  //       console.log(res);
  //     }
  //   });
  // },
  
  
})