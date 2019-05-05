// pages/city/city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now: '',

    prov_selected: 0,
    city_selected: 0,

    province: [{
      prov: '浙江',
      city: ['杭州', '宁波', '温州'],
    },{
      prov: '江苏',
      city: ['南京', '苏州', '无锡'],
    }],

  },

  submit: function (e) {
    getApp().globalData.city = this.data.province[this.data.prov_selected].city[this.data.city_selected];
    wx.navigateBack({
      delta: 1
    });
    wx.showToast({
      title: '城市切换成功！',
    })
  },

  changeProv: function (e){
    this.setData({
      prov_selected: e.detail.value,
      city_selected: 0
    });
  },

  changeCity: function (e) {
    this.setData({ city_selected: e.detail.value });
  },

  submitButtom: function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ now: getApp().globalData.city});

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: getApp().globalData.city
    })
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