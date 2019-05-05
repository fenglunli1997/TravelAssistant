Page({
  data: {
    arrays: [],
    change_city: true,
  },

  changeCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  goRestaurant: function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'restaurant/restaurant?id=' + id + '&score=' + this.data.arrays[id].score + '&price=' + this.data.arrays[id].price + '&name=' + this.data.arrays[id].name
    })
  },

  initData: function(){
    var arrays = [];
    var src = '/img/travel/';

    var obj0 = new Object();
    obj0.id = 0;
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '外婆家';
    obj0.score = 4.5;
    obj0.price = 61;
    obj0.distance = '14.2km';
    obj0.street = '湖滨银泰';
    obj0.type = '杭帮菜';
    obj0.tag = '家人聚餐';
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.id = 1;
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '弄堂里';
    obj1.score = 2.8;
    obj1.price = 99;
    obj1.distance = '0.8km';
    obj1.street = '弗雷德广场';
    obj1.type = '杭帮菜';
    obj1.tag = '家人聚餐';
    arrays[1] = obj1;

    return arrays;
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