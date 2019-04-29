// pages/Traffic/Traffic.js

Page({
  data: {
    // color: ['blue', 'black', 'black', 'black'],
    // border: [1, 0, 0, 0],
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
  
  // initData: function (id) {
  //   if (id == 2) {
  //     var a = "polyline.points[0].latitude";
  //     var b = "polyline.points[0].longitude";
  //     var c = "polyline.points[1].latitude";
  //     var d = "polyline.points[1].longitude";
  //     this.setData({
  //       [a]: this.data.markers[0].latitude,
  //       [b]: this.data.markers[0].longitude,
  //       [c]: this.data.markers[0].latitude,
  //       [d]: this.data.markers[0].longitude,
  //     });
  //   } else{
  //     var e = "polyline.points[" + id + "].latitude";
  //     var f = "polyline.points[" + id + "].longitude";
  //     this.setData({
  //       [e]: this.data.markers[id].latitude,
  //       [f]: this.data.markers[id].longitude,
  //     });
  //   }
  //   // console.log(this.data.polyline.points[0].latitude + "initData0");
  //   // console.log(this.data.polyline.points[1].latitude + "initData1");
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
        // that.initData(no);
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

  // choose: function (e) {
  //   var id = e.currentTarget.dataset.id;
  //   var arr = 'color[' + id + ']';
  //   var ar = 'border[' + id + ']';
  //   this.setData({ [arr]: 'blue' });
  //   this.setData({ [ar]: 1 });
  //   for (var i = 0; i < 4; i++) {
  //     if (i != id) {
  //       var a = 'color[' + i + ']';
  //       var b = 'border[' + i + ']';
  //       this.setData({ [a]: 'black' });
  //       this.setData({ [b]: 0 });
  //     }
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getLocation({
      success: (res) => {
        this.setData({
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude
        });
        // console.log(this.data.markers[0].latitude + "success");
      },
    });

    // this.initData(2);

  },
})