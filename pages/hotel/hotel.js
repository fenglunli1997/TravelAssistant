Page({
  data: {
    arrays: [],
    color: ['blue', 'black', 'black', 'black'],
    border: [1, 0, 0, 0],
    title: ['全部', '酒店', '民宿', '青年旅社'],
    type: 0,
    bar_width: '25%',
    sum: 2,
    change_city: true,
  },

  changeCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  initData: function () {
    var arrays = [];
    var src = '../../img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '如家酒店';
    obj0.score = 3.9;//
    obj0.price = 120;
    obj0.status = '全国连锁';
    obj0.distance = '14.2km';
    obj0.street = '西湖/南宋御街';
    obj0.icon = '各种icon';//
    obj0.type = 1;
    arrays[0] = obj0;
    arrays[1] = obj0;

    return arrays;
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

  search: function(){
    ;
  },

  goReserve(){
    wx.navigateTo({
      url: 'reserve/reserve',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({ arrays: arrays });
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