// pages/hotel/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '如家酒店',
    location: '上城区东坡路7号湖滨银泰in77B区B1层',
    route: '距地铁1号线龙翔桥站C2口10m',
    arrays: [],

  },

  initData: function () {
    var arrays = [];
    var src = '../../../img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '温馨大床房B';
    obj0.price = 120;
    // obj0.intro = '欲把西湖比西子，淡妆浓抹总相宜';
    arrays[0] = obj0;
    arrays[1] = obj0;

    return arrays;
  },

  chooseTime: function(){
    ;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({title: this.data.pageTitle});
    var arrays = this.initData();
    this.setData({ arrays: arrays });

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