Page({
  data: {
    change_city: true,
    scenerys: [],
    url: '',
    town: [],
    // cityC: ''
  },

  changeCity: function(){
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },
  
  goSecenery: function(e){
    var that = this;
    var id = parseInt(e.currentTarget.dataset.id);
    wx.setStorage({
      key: 'scenery',
      data: that.data.scenerys[id-1]
    });
    wx.navigateTo({
      url: 'scenery/scenery?id=' + id
    });
  },

  initData: function () {
    this.setData({
      url: getApp().globalData.url + 'img/Scenery/',
      // cityC: wx.getStorageSync('cityConfig')
    });
    console.log(this.data.cityC);
    wx.getStorage({
      key: 'town',
      success: function (res) {
        that.setData({ town: res.data });
      },
    })
    var that = this;
    wx.request({
      url: getApp().globalData.url_q + 'Scenery',
      header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({ scenerys: res.data });
      },
    });
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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    this.setData({ change_city: true });
    if (options)
      wx.setNavigationBarTitle({
        title: options.name
      })
    else
      wx.setNavigationBarTitle({
        title: getApp().globalData.city.ciName
      })
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
    this.setData({ change_city: !this.data.change_city });
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