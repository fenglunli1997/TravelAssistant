Page({
  data: {
    color: ['blue', 'black', 'black', 'black'],
    border: [1, 0, 0, 0],
    arrays: [],

  },

  initData: function () {
    var arrays = [];
    var obj0 = new Object();
    obj0.date = '2-21';
    obj0.city = '杭州';
    obj0.name = '如家酒店';
    obj0.type = '大床房';
    obj0.price = 120.00;
    arrays[0] = obj0;
    arrays[1] = obj0;
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
  
  onLoad: function (options) {
    var arrays = this.initData();
    this.setData({ arrays: arrays });

  }
})