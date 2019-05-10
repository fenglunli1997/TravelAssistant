Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotel: {},
    favStatus: false,
  },

  favButton: function(){
    this.setData({ favStatus: !this.data.favStatus });
    if (this.data.favStatus)
      wx.showToast({title: '收藏成功！',})
  },

  call: function(){
    wx.makePhoneCall({
      phoneNumber: this.data.hotel.hoPhone,
    })
  },

  // chooseTime: function(){
  //   ;
  // },

  /**
   * 数据初始化函数--
   */
  initData: function(){
    var that = this;
    wx.getStorage({
      key: 'hotel',
      success: function (res) {
        // console.log(res)
        that.setData({ hotel: res.data });
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.hotel.hoName });//
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