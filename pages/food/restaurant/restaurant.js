Page({
  data: {
    imgs: [],
    restaurant: {},
    recommend_title: '推荐菜',
    arrays: [],
    arrays_pingjia: [],
    likeSum: 108,
    likeState: false,
    favState: false,
    focus: false,
  },

  commentButton: function () {
    this.setData({ focus: true });
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },

  favButton: function () {
    this.setData({ favState: !this.data.favState });
    if (this.data.favState)
      wx.showToast({ title: '收藏成功！', });
  },

  likeButton: function () {
    this.setData({ likeState: !this.data.likeState });
    if (this.data.likeState){
      wx.showToast({ title: '点赞成功！', });
      this.setData({ likeSum: this.data.likeSum + 1 });
    }
    else
      this.setData({ likeSum: this.data.likeSum - 1 });
  },

  initFood: function () {
    var arrays = [];
    var src = '/img/travel/';

    var obj0 = new Object();
    obj0.img = src + 'hz-xh1.jpg';
    obj0.name = '东坡肉';
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.img = src + 'hz-xh1.jpg';
    obj1.name = '西施豆腐';
    arrays[1] = obj1;

    var obj2 = new Object();
    obj2.img = src + 'hz-xh1.jpg';
    obj2.name = '西湖醋鱼';
    arrays[2] = obj2;

    var obj3 = new Object();
    obj3.img = src + 'hz-xh1.jpg';
    obj3.name = '莲子羹';
    arrays[3] = obj3;

    var obj4 = new Object();
    obj4.img = src + 'hz-xh1.jpg';
    obj4.name = '糖醋排骨';
    arrays[4] = obj4;

    return arrays;
  },

  commentLikeButton: function (e) {
    var id = e.currentTarget.dataset.comment_id;
    var a = 'arrays_pingjia[' + id + '].likeState';
    var b = this.data.arrays_pingjia[id].likeState;
    var c = 'arrays_pingjia[' + id + '].likeSum';
    var d = parseInt(this.data.arrays_pingjia[id].likeSum);
    this.setData({ [a]: !b });
    if (!b) {
      wx.showToast({ title: '点赞成功！', });
      this.setData({ [c]: d + 1 });
    }
    else
      this.setData({ [c]: d - 1 });
  },

  initComment: function () {
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

  call: function () {
    var phone = this.data.restaurant.rePhone;
    if(phone)
      wx.makePhoneCall({
        phoneNumber: phone,
      })
    else
      wx.showToast({
        title: '该商家没有电话！'
      })
  },

  shown: function(e){
    // var id = e.detail.current;
    // for(var i=id; i<4;i++){
    //   var a = "this.data.imgs[" + i + "]"
    //   this.setData({ [a]: this.data.imgs[id]});
    // }
  },

  initData() {
    var that = this;
    wx.getStorage({
      key: 'restaurant',
      success: function (res) {
        // console.log(res)
        that.setData({ restaurant: res.data });
      },
      complete: function(){
        var url = getApp().globalData.url + 'img/Restaurant/' + that.data.restaurant.reId + '/';
        var imgs = [url + 0, url + 1, url + 2, url + 3, url + 4];
        // imgs[0] = url + 0;
        that.setData({imgs: imgs});
      }
    });
    var arrays = this.initFood();
    this.setData({ arrays: arrays});
    

    

    // wx.setStorage({
    //   key: 'imgs',
    //   data: url + restaurant.reId +
    //   success: function(){
    //     that.setData({ imgs: imgs});
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var arrays_pingjia = this.initComment();
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