// pages/personal/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ['blue', 'black', 'black', 'black'],
    border: [1, 0, 0, 0],
    arrays: [],

  },

  initData: function () {
    var arrays = [];
    // var src = '../../../img/travel/';

    var obj0 = new Object();
    // obj0.img = src + 'hz-xh1.jpg';
    obj0.time = '2-21'
    obj0.fr = '宋城';
    obj0.to = '西湖';
    obj0.type = '出行';
    obj0.price = 30.00;
    arrays[0] = obj0;
    arrays[1] = obj0;

    return arrays;
  },

  choose: function (e) {
    var id = e.currentTarget.dataset.id;
    var arr = 'color[' + id + ']';
    var ar = 'border[' + id + ']';
    this.setData({ [arr]: 'blue' });
    this.setData({ [ar]: 1 });
    for (var i = 0; i < 4; i++) {
      if (i != id) {
        var a = 'color[' + i + ']';
        var b = 'border[' + i + ']';
        this.setData({ [a]: 'black' });
        this.setData({ [b]: 0 });
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({ arrays: arrays });

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