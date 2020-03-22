import {globalUrl} from "../../../utils/url.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[],
    type:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type =options.type;
    this.setData({
      type:type
    })
    let title="";
    wx.showLoading({
      title: '正在加载中...',
    })
    if(type === "move"){
      title="电影";
      this.getMovesList();
    }else if(type === "tv"){
      title = "电视剧";
      this.getTvsList();
    }else{
      title = "综艺";
      this.getShowsList();
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  
  getMovesList: function () {
    let that = this;
    wx.request({
      url: globalUrl.movesList,
      data: {
        count: 1000
      },
      success: function (res) {
        let item = res.data.subject_collection_items
        that.setData({
          item: item
        });
        wx.hideLoading();
      }
    })
  },

  getTvsList: function () {
    let that = this;
    wx.request({
      url: globalUrl.tvsList,
      data: {
        count: 1000
      },
      success: function (res) {
        let item = res.data.subject_collection_items
        that.setData({
          item: item
        });
        wx.hideLoading();
      }
    })
  },

  getShowsList: function () {
    let that = this;
    wx.request({
      url: globalUrl.showsList,
      data: {
        count: 1000
      },
      success: function (res) {
        let item = res.data.subject_collection_items
        that.setData({
          item: item
        });
        wx.hideLoading();
      }
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