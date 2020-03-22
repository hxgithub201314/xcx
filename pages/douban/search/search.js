import {globalUrl} from '../../../utils/url.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let that = this;
     wx.getStorage({
       key: 'search',
       success: function(res) {
         console.log(res);
         let history = res.data;
         that.setData({
           history:history
         })
       },
     });
     console.log(this.data.history);
  },
  OnSearchEventInput:function(e){
    let val = e.detail.value;
    console.log(val)
    let that = this;
      wx.request({
        url: globalUrl.searchUrl(val),
        success: function (res) {
          console.log(res);
          that.setData({
            item: res.data.subjects
          })
        }
      })
    
    
  },
  goDetail:function(e){
    let id = e.currentTarget.dataset.id;
    let title = e.currentTarget.dataset.title;
    let history = this.data.history;
    let isHasHistory = false;
    for(let i in history){
      if(history[i].id == id){
         isHasHistory = true;
         break;
      }
    }

    if(!isHasHistory){
      if(!history){
        history = [];
      }
      history.push({id:id,title:title})
    }
    wx.setStorage({
      key: 'search',
      data: history,
    });
    console.log(id)
    wx.navigateTo({
      url: '/pages/douban/detail/detail?id='+ id +'&type=move',
    })
  },
  removeHistory:function(){
    let that = this;
    wx.removeStorage({
      key: 'search',
      success: function(res) {
        console.log(res);
        console.log(that.data.item);
        that.setData({
          history:null
        });
      },
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