Page({
  data: {
    change_city: true,
    scenerys: [],
    url: '',
    towns: [],
    cities: [],
    ciId: 0,
    weathers: [],
    dressing: '',
  },

  testWeather: function(){
    var that = this;
    var cityName = this.data.cities[this.data.ciId-1].ciName;
    wx.request({
      url: 'https://v.juhe.cn/weather/index?format=2&cityname=' + cityName +'&key=5c402dc09b6cfe2076e89389dc5987d5',
      header: {'content-type': 'Application/json'},
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          weathers: res.data.result.future,
          dressing: res.data.result.today.dressing_advice,
        });
      },
    })
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
    wx.request({
      url: getApp().globalData.url + 'QueryServlet?table=Scenery',//
      header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({ scenerys: res.data });//
      },
    });
    this.setData({
      ciId: getApp().globalData.city.ciId,
      url: getApp().globalData.url + 'img/Scenery/'
    });
    var that = this;
    wx.getStorage({
      key: 'towns',
      success: function (res) {
        that.setData({ towns: res.data });
      },
    });
    wx.getStorage({
      key: 'cities',
      success: function (res) {
        that.setData({ cities: res.data });
        that.testWeather();
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ change_city: true });
    this.initData();
    if (options)
      wx.setNavigationBarTitle({
        title: options.name
      })
    else
      wx.setNavigationBarTitle({
        title: getApp().globalData.city.ciName
      });
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
    this.initData();
    if (options)
      wx.setNavigationBarTitle({
        title: options.name
      })
    else
      wx.setNavigationBarTitle({
        title: getApp().globalData.city.ciName
      });
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