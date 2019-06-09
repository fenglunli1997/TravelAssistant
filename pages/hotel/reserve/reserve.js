Page({
  data: {
    id: 0,
    imgs: [],
    hotel: {},
    room: [],
    favStatus: false,
    img: '',
    date: '2019-06-08',
    length: 0,
    date_length: [1,2,3,4,5,6,7],
  },

  goOrder: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var id = parseInt(e.currentTarget.dataset.id);
    var price = parseInt(this.data.room[index].roPrice) * parseInt(this.data.date_length[this.data.length]);
    var a = getApp().globalData.url + 'ReserveServlet?userId=' + 1 + '&price=' + price + '&roId=' + id;
    wx.request({
      url: a,
      success: function(){
        wx.showToast({
          title: '预订成功！',
        })
      }
    })
  },

  changeFromDay: function (e) {
    this.setData({ date: e.detail.value });
  },

  changeLength: function(e){
    this.setData({ length: e.detail.value });
  },

  favButton: function(){
    // this.setData({ favStatus: !this.data.favStatus });
    // if (this.data.favStatus)
    //   wx.showToast({title: '收藏成功！',})
    this.setData({ favStatus: true });
    var that = this;
    wx.request({
      url: getApp().globalData.url + 'FavNewServlet?type=3&id=' + that.data.id + '&userId=' + wx.getStorageSync('sessionId'),
      success: function () {
        wx.showToast({
          title: '收藏成功！',
        });
      }
    })
  },

  call: function(){
    wx.makePhoneCall({
      phoneNumber: this.data.hotel.hoPhone,
    })
  },

  /**
   * 数据初始化函数--
   */
  initData: function(){
    var that = this;
    wx.getStorage({
      key: 'hotel',
      success: function (res) {
        that.setData({
          hotel: res.data,
          id: res.data.hoId
        });
        console.log(getApp().globalData.url_f + '3&id=' + this.data.hotel.hoId);//hotel没定义，太早了！
    // wx.request({
    //   url: getApp().globalData.url_f + '3&id=' + that.data.hotel.hoId,
    //   header: { 'content-type': 'Application/json' },
    //   method: 'GET',
    //   success: function(res){
    //     console.log(res);
    //   }
    // });
      },
      complete: function(){
        wx.request({
          url: getApp().globalData.url_q + 'Room WHERE hoId=' + parseInt(that.data.hotel.hoId),
          success: function (res) {
            that.setData({ room: res.data });
          }
        });
        var url = getApp().globalData.url + 'img/Hotel/' + that.data.hotel.hoId + '/';
        var imgs = [url + 0, url + 1, url + 2, url + 3, url + 4];
        var b = getApp().globalData.url + 'img/Hotel/' + that.data.hotel.hoId + '/' + that.data.hotel.hoId + '_';
        that.setData({
          imgs: imgs,
          img: b
        });
      }
    });
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
    wx.setNavigationBarTitle({ title: this.data.hotel.hoName });//
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