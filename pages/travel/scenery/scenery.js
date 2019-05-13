Page({
  data: {
    id: 0,
    scenery: {},
    recommend: [],
    index: 0,
    weather: '小雨',
    tempereture: '7~12',
    attention: '杭州多雨，记得带伞',
    likeState: false,
    favState: false,
    likeSum: 18,
    diary_name: '夜游西湖',
    seeMore: true,
    diarys: [],
    img: '',
  },

  likeButton: function(){
    var a = this.data.likeState;
    var b = parseInt(this.data.likeSum);
    this.setData({ likeState: !a });
    if (this.data.likeState) {
      this.setData({ likeSum: b + 1 });
      wx.showToast({
        title: '点赞成功！',
        icon: '',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    else
      this.setData({ likeSum: b - 1 });
  },

  favButton: function () {
    var a = this.data.favState
    this.setData({ favState: !a });
    if(this.data.favState)
      wx.showToast({
        title: '收藏成功！',
        icon: '',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
  },

  initDiarys: function(){
    var d = [];
    var obj = new Object();
    obj.name = this.data.diary_name;
    obj.id = 0;
    obj.picture = '/img/travel/hz-xh1.jpg';
    d[0] = obj;
    return d;
  },

  initData: function () {
    this.setData({ diarys: this.initDiarys() });
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
            console.log(that.data.recommend);
          }
        });
      },
    });
  },

  goDetails: function(){
    wx.navigateTo({
      url: 'diary_main/diary_main?diary_id=0&diary_title=西湖如画2333',
    })
  },
  seeMore: function () {
    wx.navigateTo({
      url: 'diary_list/diary_list?name=' + this.data.place,
    })
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