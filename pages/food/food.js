Page({
  data: {
    restaurants: [],
    change_city: true,
  },

  changeCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  goRestaurant: function(e){
    var id = parseInt(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: 'restaurant/restaurant?id=' + id + '&score=' + this.data.restaurants[id].score + '&price=' + this.data.restaurants[id].price + '&name=' + this.data.restaurants[id].name
    })
  },

  initData: function(){
    var that = this;
    wx.request({
      url: getApp().globalData.url + 'RestaurantServlet', header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({ restaurants: res.data });
      },
      complete: function (res) {
        console.log(res)
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
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
        title: getApp().globalData.city
      })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({ change_city: !this.data.change_city });
  },
  
})