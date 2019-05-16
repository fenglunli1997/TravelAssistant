Page({
  data: {
    restaurants: [],
    change_city: true,
    type: [],
    tag: ['家人聚餐', '快餐', '饮品', '其它'],
    town: [],
    score: 'item.reScore',
    url: '',
    ciId: 0,
  },

  changeCity: function () {
    wx.navigateTo({url: '/pages/city/city'})
  },

  goRestaurant: function(e){
    var id = parseInt(e.currentTarget.dataset.id)-1;
    wx.setStorage({
      key: 'restaurant',
      data: this.data.restaurants[id],
    });
    wx.navigateTo({ url: 'restaurant/restaurant' })
  },

  initData: function(){
    var that = this;
    wx.request({
      url: getApp().globalData.url_q + 'Restaurant', header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({ restaurants: res.data });
      },
    });
    wx.getStorage({
      key: 'towns',
      success: function (res) {
        that.setData({ town: res.data });
      },
    })
    var type = [];
    type[0] = '其它';
    type[1] = '江浙菜';
    type[2] = '川湘菜';
    type[3] = '港粤菜';
    type[4] = '台湾菜';
    type[10] = '日本料理';
    type[11] = '东南亚菜';
    type[12] = '西餐';
    type[20] = '烧烤';
    type[21] = '铁板烧';
    type[22] = '火锅';
    type[23] = '烤肉';
    type[24] = '牛排';
    type[30] = '自助';
    this.setData({
      ciId: getApp().globalData.city.ciId,
      type: type,
      url: getApp().globalData.url + 'img/Restaurant/'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    // if (options)
    //   wx.setNavigationBarTitle({
    //     title: options.name
    //   })
    // else
    //   wx.setNavigationBarTitle({
    //     title: getApp().globalData.city
    //   });
    // this.setData({ change_city: true });
    this.initData();
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({ change_city: !this.data.change_city });
  },
  
})