// pages/personal/favorate/favorate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ['blue', 'black', 'black', 'black'],
    border: [1, 0, 0, 0],
    arrays: [],
    // check: true,

  },

  star: function(e){
    var no = e.currentTarget.dataset.no;
    var a = 'arrays[' + no + '].check';
    this.setData({ [a]: !this.data.arrays[no].check});//这里如果写[a]:![a]的话，后面的[a]好像是固定值，点击按钮也只改变一次
  },

  initData: function () {
    var arrays = [];
    var src = '../../../img/travel/';

    var obj0 = new Object();
    obj0.id = 0;
    obj0.img = src + 'hz-xh1.jpg';
    obj0.pl = '杭州';
    obj0.name = '西湖';
    obj0.type = '景点';
    obj0.check = true;
    // obj0.price = 30.00;
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.id = 1;
    obj1.img = src + 'hz-xh1.jpg';
    obj1.pl = '杭州';
    obj1.name = '西湖';
    obj1.type = '景点';
    obj1.check = true;
    arrays[1] = obj1;

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