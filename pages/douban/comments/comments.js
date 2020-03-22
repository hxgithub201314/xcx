import {globalUrl} from "../../../utils/url.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     start:1,
     count:10,
      commentList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id,type,title,thumbnail,rate} = options;
    let that = this;
    wx.showLoading({
      title: '正在加载中...',
    })
    if(type === "move"){
      wx.request({
        url: globalUrl.moveComments(id,that.data.start,that.data.count),
        success: function (res) {
          that.moreComments(res);
        }
      })
    }else if(type === "tv"){
      wx.request({
        url: globalUrl.tvComments(id,that.data.start, that.data.count),
        success: function (res) {
          that.moreComments(res);
        }
      })
    }else{
      wx.request({
        url: globalUrl.showComments(id,that.data.start, that.data.count),
        success: function (res) {
          that.moreComments(res);
        }
      })
    }
    this.setData({
      thumbnail: thumbnail,
      title:title,
      rate:rate,
      type:type,
      id:id
    })
  },
  noGoBack:function(){
    wx.navigateBack({
    })
  },
  moreComments:function(res){
    let total = res.data.total;
    let commentList = res.data.interests;
    wx.hideLoading();
    this.setData({
      total: total,
      commentList: commentList
    });
    
  },
  onReachBottomComment:function(res){
     let that = this;
     wx.hideLoading();
     that.setData({
       commentList: [...that.data.commentList, ...res.data.interests]
     });
     console.log(that.data.commentList)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    let that = this;
    let {start,count,type,id} = that.data;
    wx.showLoading({
      title: '正在加载中',
    })
    that.setData({
      start:start+10,
      count:count
    });
    if (type === "move") {
      wx.request({
        url: globalUrl.moveComments(id,that.data.start,that.data.count),
        success: function (res) {
          that.onReachBottomComment(res);
        }
      })
    } else if (type === "tv") {
      wx.request({
        url: globalUrl.tvComments(id,that.data.start, that.data.count),
        success: function (res) {
          that.onReachBottomComment(res);
        }
      })
    } else {
      wx.request({
        url: globalUrl.showComments(id,that.data.start,that.data.count),
        success: function (res) {
          that.onReachBottomComment(res);
        }
      })
    }
  },

})