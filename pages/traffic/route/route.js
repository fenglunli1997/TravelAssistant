// pages/traffic/route/route.js
let plugin = requirePlugin("myPlugin")
let routeInfo = {
  startLat: 0,    //起点纬度 选填
  startLng: 0,    //起点经度 选填
  startName: "我的位置",   // 起点名称 选填
  endLat: 0,    // 终点纬度必传
  endLng: 0,  //终点经度 必传
  endName: "",  //终点名称 必传
  mode: "car"  //算路方式 选填
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    routeInfo: routeInfo,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a1 = "routeInfo.startName";
    var b1 = "routeInfo.startLat";
    var c1 = "routeInfo.startLng";
    var d1 = "routeInfo.endName";
    var e1 = "routeInfo.endLat";
    var f1 = "routeInfo.endLng";
    this.setData({
      [a1]: options.name0,
      [b1]: options.la0,
      [c1]: options.lo0,
      [d1]: options.name1,
      [e1]: options.la1,
      [f1]: options.lo1,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})