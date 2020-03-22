// pages/xcxjc/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   day:6,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var time = getDate(1500000000000);
     this.setData({
       time:time
     });
    },
})