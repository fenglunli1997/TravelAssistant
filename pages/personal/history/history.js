Page({
  data: {
    orders: [],
    cities: [],
  },

  initData: function () {
    var that = this;
    wx.getStorage({
      key: 'cities',
      success: function (res) {
        that.setData({ cities: res.data });
      },
    });
    wx.request({
      url: getApp().globalData.url + 'OrdersServlet?userId=' + wx.getStorageSync('sessionId'),
      header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({ orders: res.data })
      }
    });
  },
  
  onLoad: function (options) {
    this.initData();
  }
})