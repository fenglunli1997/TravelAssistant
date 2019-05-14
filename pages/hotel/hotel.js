Page({
  data: {
    hotels: [],
    color: ['blue', 'black', 'black', 'black'],
    border: [1, 0, 0, 0],
    title: ['全部', '酒店', '民宿', '青年旅社'],
    type: 0,
    bar_width: '25%',
    // sum: 2,
    change_city: true,
    url: '',
    ciId: 0,
    town: [],
  },

  changeCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  initData: function () {
    var that = this;
    wx.getStorage({
      key: 'towns',
      success: function (res) {
        that.setData({ town: res.data });
      },
    });
    wx.request({
      url: getApp().globalData.url_q + 'Hotel', header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function (res) {
        that.setData({ hotels: res.data });
      },
      complete: function (res) {
        console.log(res)
      }
    });
    this.setData({
      url: getApp().globalData.url + 'img/Hotel/',
      ciId: getApp().globalData.city.ciId,
    });
  },

  choose(e) {
    var id;
    var ischange = e.currentTarget.dataset.ischange;
    if (ischange)
      id = e.detail.current;
    else
      id = e.currentTarget.dataset.id;
    var arr = 'color[' + id + ']';
    var ar = 'border[' + id + ']';
    this.setData({
      [arr]: 'blue',
      [ar]: 1,
      type: id
    });
    for (var i = 0; i < 5; i++) {
      if (i != id) {
        var a = 'color[' + i + ']';
        var b = 'border[' + i + ']';
        this.setData({ [a]: 'black' });
        this.setData({ [b]: 0 });
      }
    }
  },

  // search: function(){
  //   ;
  // },

  goReserve: function(e){
    var id = parseInt(e.currentTarget.dataset.id)-1;
    wx.setStorage({
      key: 'hotel',
      data: this.data.hotels[id],
    });
    wx.navigateTo({url: 'reserve/reserve'});
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