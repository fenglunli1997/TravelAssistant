Page({
  data: {
    id: 0,
    scenery: {},
    recommend: [],
    favState: false,
    img: '',
  },

  favButton: function () {
    this.setData({ favState: true });
    var that = this;
    wx.request({
      url: getApp().globalData.url + 'FavNewServlet?type=1&id=' + that.data.id + '&userId=' + wx.getStorageSync('sessionId'),
      success: function(){
        wx.showToast({
          title: '收藏成功！',
        });
      }
    })
  },

  initData: function () {
    var that = this;
    wx.getStorage({
      key: 'scenery',
      success: function(res) {
        that.setData({ scenery: res.data});
        wx.request({
          url: getApp().globalData.url_q + "Spot WHERE ScId=" + that.data.id,
          success: function(res){
            that.setData({
              recommend: res.data,
            });
          }
        });
      },
    });
  },

  onLoad: function (options) {
    this.setData({ id: options.id })
    console.log(options);
    this.initData();
    var b = getApp().globalData.url + 'img/Scenery/' + this.data.id + '/';
    this.setData({ img: b});
  },

  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.scenery.scName });
  },
  
})