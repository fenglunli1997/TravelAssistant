Page({
  data: {
    title: ['全部', '景点', '餐厅', '酒店', '游记'],
    color: ['blue', 'black', 'black', 'black', 'black'],
    type: 0,
    border: [1, 0, 0, 0, 0],
    bar_width: '20%',
    sum: 5,
    fav: [],
  },

  star: function(e){
    var no = parseInt(e.currentTarget.dataset.no);
    console.log(no);
    var a = "fav[" + no + "].faStatus"
    this.setData({ [a]: 0 });
    wx.showToast({title: '已取消收藏！'});
  },

  initData: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.url + 'FavServlet',
      header: {
        'content-type': 'Application/json'
      },
      method: 'GET',
      success: function(res){
        console.log(res);
        that.setData({ fav: res.data})
      }
    });
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
    this.initData();
  }
  
})