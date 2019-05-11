Page({

  /**
   * 页面的初始数据
   */
  data: {
    prov_selected: 0,
    city_selected: 0,
    provinces: [],
    cities: [],
    nowProv: '',
    nowCity: '',
  },

  initData(){
    var app = getApp();
    var that = this;
    wx.request({
      url: app.globalData.url_q + 'Province',
      success: function(res){
        that.setData({ provinces: res.data});
      }
    });
    this.setCity();
    this.setData({
      nowProv: app.globalData.province.prName,
      nowCity: app.globalData.city.ciName
    })
  },

  setCity(){
    var that = this;
    wx.request({
      url: getApp().globalData.url_q + 'City WHERE PrId=' + (parseInt(that.data.prov_selected) + 1),
      success: function (res) {
        that.setData({
          cities: res.data
        });
        console.log(res.data);
      }
    });
  },

  submit: function (e) {
    var app = getApp();
    app.globalData.province = this.data.provinces[parseInt(this.data.prov_selected)]
    app.globalData.city = this.data.cities[parseInt(this.data.city_selected)];
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
    this.setCity();
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
    this.initData();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: getApp().globalData.city.ciName
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