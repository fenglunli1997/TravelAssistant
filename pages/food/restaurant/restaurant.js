// pages/food/restaurant/restaurant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: '上城区东坡路7号湖滨银泰in77B区B1层',
    route: '距地铁1号线龙翔桥站C2口10m',
    arrays: [],
    arrays_pingjia: [],

  },

  initData: function () {
    var arrays = [];
    var src = '../../../img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '西湖';
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '西溪湿地';
    arrays[1] = obj1;

    var obj2 = new Object();
    obj2.img = src + 'hz-xh1.jpg';
    obj2.name = '千岛湖';
    arrays[2] = obj2;

    var obj3 = new Object();
    obj3.img = src + 'hz-xh1.jpg';
    obj3.name = '宋城千古情';
    arrays[3] = obj3;

    var obj4 = new Object();
    obj4.img = src + 'hz-xh1.jpg';
    obj4.name = '南宋御街';
    arrays[4] = obj4;

    return arrays;
  },

  initData2: function () {
    var arrays = [];
    var src = '../../../img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '说走就走';
    obj0.info = '啦啦啦~';
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '新用户123';
    obj1.info = '嗯哼~';
    arrays[1] = obj1;

    return arrays;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({ arrays: arrays });

    var arrays_pingjia = this.initData2();
    this.setData({ arrays_pingjia: arrays_pingjia });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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