Page({
  data: {
    id: 0,
    imgs: [],
    restaurant: {},
    img: '',
    recommend: {},
    likeState: false,
    favState: false,
    focus: false,
  },

  favButton: function () {
    this.setData({ favState: true });
    var that = this;
    wx.request({
      url: getApp().globalData.url + 'FavNewServlet?type=2&id=' + that.data.id + '&userId=' + wx.getStorageSync('sessionId'),
      success: function () {
        wx.showToast({
          title: '收藏成功！',
        });
      }
    })
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

  initData() {
    var b = getApp().globalData.url + 'img/Restaurant/' + (parseInt(this.data.id) + 1) + '/';
    this.setData({ img: b });
    var that = this;
    wx.getStorage({
      key: 'restaurant',
      success: function (res) {
        that.setData({
          restaurant: res.data,
          id: res.data.reId
        });
        wx.request({
          url: getApp().globalData.url_q + "Food WHERE ReId=" + res.data.reId,
          success: function (r) {
            that.setData({
              recommend: r.data,
            });
          }
        });
      },
      complete: function(){
        var url = getApp().globalData.url + 'img/Restaurant/' + that.data.restaurant.reId + '/';
        var imgs = [url + 0, url + 1, url + 2, url + 3, url + 4];
        that.setData({imgs: imgs});
      }
    });
    var arrays = this.initFood();
    this.setData({ arrays: arrays});
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
      title: this.data.restaurant.reName
    })
  }
})