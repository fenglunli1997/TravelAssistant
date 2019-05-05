Page({
  data: {
    picture: '/img/travel/hz-xh1.jpg',
    info: '夜游西湖正文在这里。',
    title: '夜游西湖',
    score: 2.9,
    likeSum: 200,
    likeState: false,
    favState: false,
    focus: false,
    arrays_pingjia: [],
  },

  initData2: function () {
    var arrays = [];
    var src = '/img/travel/';

    var obj0 = new Object();
    obj0.id = 0;
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '说走就走';
    obj0.info = '啦啦啦~';
    obj0.likeState = false;
    obj0.likeSum = 10;
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.id = 1;
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '新用户123';
    obj1.info = '嗯哼~';
    obj1.likeState = false;
    obj1.likeSum = 6;
    arrays[1] = obj1;

    return arrays;
  },

  commentLikeButton: function(e){
    var id = e.currentTarget.dataset.comment_id;
    var a = 'arrays_pingjia[' + id + '].likeState';
    var b = this.data.arrays_pingjia[id].likeState;
    var c = 'arrays_pingjia[' + id + '].likeSum';
    var d = parseInt(this.data.arrays_pingjia[id].likeSum);
    this.setData({ [a]: !b });
    if (!b){
      wx.showToast({ title: '点赞成功！', });
      this.setData({ [c]: d + 1 });
    }
    else
      this.setData({ [c]: d - 1 });
  },

  commentButton: function(){
    this.setData({ focus: true });
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },

  favButton: function(){
    this.setData({ favState: !this.data.favState });
    if (this.data.favState)
      wx.showToast({ title: '收藏成功！',});
  },

  likeButton: function () {
    this.setData({ likeState: !this.data.likeState });
    if (this.data.likeState) {
      wx.showToast({ title: '点赞成功！', });
      this.setData({ likeSum: this.data.likeSum + 1 });
    }
    else
      this.setData({ likeSum: this.data.likeSum - 1 });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({ title: options.diary_title });
    this.setData({ info: this.data.info + options.diary_id });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var arrays_pingjia = this.initData2();
    this.setData({ arrays_pingjia: arrays_pingjia });
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