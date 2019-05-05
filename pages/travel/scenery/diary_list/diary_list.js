Page({
  data: {
    diarys: [],
  },

  initData: function(){
    var diarys = [];
    var obj0 = new Object();
    obj0.name = '西湖如画0';
    obj0.id = 0;
    obj0.picture = '/img/travel/hz-xh1.jpg';
    var obj1 = new Object();
    obj1.name = '西湖如画1';
    obj1.id = 1;
    obj1.picture = '/img/travel/hz-xh1.jpg';
    var obj2 = new Object();
    obj2.name = '西湖如画2';
    obj2.id = 2;
    obj2.picture = '/img/travel/hz-xh1.jpg';
    var obj3 = new Object();
    obj3.name = '西湖如画3';
    obj3.id = 3;
    obj3.picture = '/img/travel/hz-xh1.jpg';
    diarys[0] = obj0;
    diarys[1] = obj1;
    diarys[2] = obj2;
    diarys[3] = obj3;
    return diarys;
  },

  goDetails: function (e) {
    var id = e.currentTarget.dataset.id;
    var title = this.data.diarys[id].name;
    wx.navigateTo({
      url: '../diary_main/diary_main?diary_id=' + id + '&diary_title=' + title,
    })
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: options.name + '-更多游记' });
    var a = this.initData();
    this.setData({ diarys : a });
  }
  
})