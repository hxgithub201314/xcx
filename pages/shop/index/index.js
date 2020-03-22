// pages/shop/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tablist:["推荐","热点","新闻","体育","音乐","综艺","安全"],
      currentTab:0,//swiper对应的下标
      windowHeight:0,
      scrollLeft:''//距离左边的距离
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //高度自适应
     let that = this;
     wx.getSystemInfo({
       success: function(res) {
          that.setData({
            windowHeight: res.windowHeight
          })
       },
     })
  },
  //tab事件
  swichNav:function(e){
    let cur = e.currentTarget.dataset.current;
    if(cur === this.data.currentTab){
      return false
    }else{
      this.setData({
         currentTab:cur
      })
    }
  },
  //swiper事件
  swiperTab:function(e){
    this.setData({
       currentTab: e.detail.current
    })
    let self = this;
    const query = wx.createSelectorQuery();
    query.selectAll('.soloo-item').boundingClientRect();
    query.exec(function(res){
      let num = 0;
      for(let i=0;i<self.data.currentTab;i++){
        num += res[0][i].width
      }
      self.setData({
        scrollLeft:Math.ceil(num)
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})