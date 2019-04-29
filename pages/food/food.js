// pages/Food/Food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: "杭州",
    arrays: [],

  },

  goRestaurant: function(){
    wx.navigateTo({
      url: 'restaurant/restaurant',
    })
  },

  initData: function(){
    var arrays = [];
    var src = '../../img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '外婆家';
    // obj0.intro = '欲把西湖比西子，淡妆浓抹总相宜';
    arrays[0] = obj0;
    arrays[1] = obj0;

    return arrays;

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.pageTitle
    })
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