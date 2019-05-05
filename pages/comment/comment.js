Page({
  data: {
    star: [false, false, false, false, false],
    score: 0,
    comment: '',
  },

  star: function(e){
    var id = parseInt(e.currentTarget.dataset.id);
    if(this.data.star[id] == false){
      for(var i=0; i<=id; i++){
        var a = "star[" + i + "]";
        this.setData({ [a] : true });
      }
      this.setData({ score: id+1 });
    }
    else{
      for(var i=4; i>=id; i--){
        var a = "star[" + i + "]";
        this.setData({ [a]: false });
      }
      this.setData({ score: id });
    }
  },

  submit: function(e){
    var a = e.detail.value.input;
    this.setData({ comment: a });
    wx.navigateBack({
      delta: 1
    });
    wx.showToast({
      title: '评论成功！',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})