Page({
  data: {
    id: 0,
    score: 0,
    arrays: [],
    place: '西湖',
    weather: '小雨',
    tempereture: '7~12',
    attention: '杭州多雨，记得带伞',
    likeState: false,
    favState: false,
    likeSum: 18,
    diary_name: '夜游西湖',
    seeMore: true,
    diarys: [],

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
    var arrays = [];
    var src = '/img/travel/';

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
    var arrays = this.initData();
    var d = this.initDiarys();
    this.setData({
      id: options.id,
      place: options.name,
      likeSum: options.id,//
      score: options.score,
      arrays: arrays,
      diarys: d
    });
    wx.setNavigationBarTitle({ title: options.name });
  }
  
})