Page({
  data: {
    title: ['全部', '景点', '餐厅', '酒店', '游记'],
    color: ['blue', 'black', 'black', 'black', 'black'],
    type: 0,
    border: [1, 0, 0, 0, 0],
    arrays: [],
    bar_width: '20%',
    sum: 5,
  },

  star: function(e){
    var no = e.currentTarget.dataset.no;
    var a = 'arrays[' + no + '].check';
    this.setData({ [a]: !this.data.arrays[no].check});
    if (!this.data.arrays[no].check)
      wx.showToast({title: '已取消收藏！'})
  },

  initData: function () {
    var arrays = [];
    var src = '/img/travel/';

    var obj0 = new Object();
    obj0.id = 0;
    obj0.img = src + 'hz-xh1.jpg';
    obj0.pl = '杭州';
    obj0.name = '西湖';
    obj0.type = 1;
    obj0.check = true;
    arrays[0] = obj0;

    var obj1 = new Object();
    obj1.id = 1;
    obj1.img = src + 'hz-xh1.jpg';
    obj1.pl = '杭州';
    obj1.name = '弄堂里';
    obj1.type = 2;
    obj1.check = true;
    arrays[1] = obj1;

    var obj2 = new Object();
    obj2.id = 2;
    obj2.img = src + 'hz-xh1.jpg';
    obj2.pl = '杭州';
    obj2.name = '如家酒店';
    obj2.type = 3;
    obj2.check = true;
    arrays[2] = obj2;

    var obj3 = new Object();
    obj3.id = 3;
    obj3.img = src + 'hz-xh1.jpg';
    obj3.pl = '上海';
    obj3.name = '城隍庙';
    obj3.type = 1;
    obj3.check = true;
    arrays[3] = obj3;

    return arrays;
  },

  choose(e){
    var id;
    var ischange = e.currentTarget.dataset.ischange;
    if(ischange)
      id = e.detail.current;
    else
      id = e.currentTarget.dataset.id;
    var arr = 'color[' + id + ']';
    var ar = 'border[' + id + ']';
    this.setData({
      [arr]: 'blue',
      [ar]: 1,
      type: id
    });
    for (var i = 0; i < 5; i++) {
      if (i != id) {
        var a = 'color[' + i + ']';
        var b = 'border[' + i + ']';
        this.setData({ [a]: 'black' });
        this.setData({ [b]: 0 });
      }
    }
  },
  
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({ arrays: arrays });

  }
  
})