Page({
  data: {
    user: {},
    province: '',
    city: '',
  },

  onLoad: function(){
    var d = getApp().globalData;
    this.setData({
      province: d.province.prName,
      city: d.city.ciName
    })
  }
})