// var QQMapWX = require("/libs/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js");
// var qqmapsdk;

Page({
  data: {
    name: ['当前位置',' '],
    markers: [{
      latitude: 0,
      longitude: 0,
      iconPath: "/icon/locate.png",
      width: 30,
      height: 30,
      id: 0,
    },{
      latitude: 0,
      longitude: 0,
      iconPath: "/icon/locate.png",
      width: 30,
      height: 30,
      id: 1,
    }],
  },

  // route: function(){
  //   wx.openLocation({
  //     latitude: this.data.markers[0].latitude,
  //     longitude: this.data.markers[0].longitude,
  //   })
  // },

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
    var routeInfo = {
      'startLat': parseFloat(this.data.markers[0].latitude),    //起点纬度 选填
      'startLng': parseFloat(this.data.markers[0].longitude),    //起点经度 选填
      'startName': this.data.name[0],   // 起点名称 选填
      'endLat': parseFloat(this.data.markers[1].latitude),    // 终点纬度必传
      'endLng': parseFloat(this.data.markers[1].longitude),  //终点经度 必传
      'endName': this.data.name[1],  //终点名称 必传
      'mode': "car"  //算路方式 选填
    };
    wx.setStorage({
      key: 'routeInfo',
      data: routeInfo,
      success: function(){
        wx.navigateTo({
          url: 'route/route',
        });
      }
    });
    
    // var a = "name0=" + this.data.name[0] + "&&la0=" + this.data.markers[0].latitude + "&&lo0=" + this.data.markers[0].longitude;
    // var b = "name1=" + this.data.name[1] + "&&la1=" + this.data.markers[1].latitude + "&&lo1=" + this.data.markers[1].longitude;
    // wx.navigateTo({
    //   url: 'route/route?' + a + "&&" + b,
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: '4INBZ-PRVRU-5WUVM-B5CDQ-FGXAS-DGBKA'
    // });

    var a = 'markers[0].latitude';
    var b = 'markers[0].longitude';
    wx.getLocation({
      success: (res) => {
        this.setData({
          [a]: res.latitude,
          [b]: res.longitude
        });
      },
    });

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.name[0],
    })
  },

})