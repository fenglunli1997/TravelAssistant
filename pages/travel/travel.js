Page({
  data: {
    arrays: [],
    change_city: true,
  },

  changeCity: function(){
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },
  
  goSecenery: function(e){
    var name = e.currentTarget.dataset.name;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'scenery/scenery?name=' + name + '&id=' + id + '&score=' + this.data.arrays[id].score,
    })
  },

  initData: function(){
    var arrays = [];
    var src = '/img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '西湖';
    obj0.intro = '欲把西湖比西子，淡妆浓抹总相宜';
    obj0.town = '西湖区';
    obj0.route = '距离28.6km';
    obj0.score = 4.8;
    obj0.id = 0;
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '西溪湿地';
    obj1.intro = '天堂的湿地，湿地的天堂';
    obj1.town = '西湖区';
    obj1.route = '距离28.6km';
    obj1.score = 5;
    obj1.id = 1;
    arrays[1] = obj1;

    var obj2 = new Object();
    obj2.img = src + 'hz-xh1.jpg';
    obj2.name = '千岛湖';
    obj2.intro = '一湖藏锦绣，千岛蕴绿洲';
    obj2.town = '西湖区';
    obj2.route = '距离28.6km';
    obj2.score = 1;
    obj2.id = 2;
    arrays[2] = obj2;

    var obj3 = new Object();
    obj3.img = src + 'hz-xh1.jpg';
    obj3.name = '宋城千古情';
    obj3.intro = '给我一天，还你千年';
    obj3.town = '西湖区';
    obj3.route = '距离28.6km';
    obj3.score = 2.8;
    obj3.id = 3;
    arrays[3] = obj3;

    var obj4 = new Object();
    obj4.img = src + 'hz-xh1.jpg';
    obj4.name = '南宋御街';
    obj4.intro = '生活品质第一街';
    obj4.town = '西湖区';
    obj4.route = '距离28.6km';
    obj4.score = 0;
    obj4.id = 4;
    arrays[4] = obj4;

    return arrays;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({arrays: arrays});
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
        title: getApp().globalData.city
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