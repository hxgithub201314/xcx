// pages/shop/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuIndex:0,//左侧菜单下标
    rightViewId:'',
    categorys: [
      {
        id: "a",
        name: '精品热热菜',
        list: [
          {
            img: '/image/meals-fan.png',
            cateName: '鱼香肉丝',
            cateDesc: '土豆+木耳+鸡蛋',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          }
        ]
      },
      {
        id: "b",
        name: '精品凉凉菜',
        list: [
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          }
        ]
      },
      {
        id: "c",
        name: '精品伴伴菜',
        list: [
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          },
          {
            img: '/image/meals-fan.png',
            cateName: '菜名',
            cateDesc: '菜的描述',
            currPrice: '9.9',
            yjPrice: '120',
            num: 0
          }
        ]
      }
    ]
  },
  //左侧点击
  menuChange:function(e){
    console.log(e)
    let rightViewId = e.currentTarget.dataset.id;
    let menuIndex = e.currentTarget.dataset.index;
    this.setData({
      rightViewId: rightViewId,
      menuIndex: menuIndex
    })
    console.log(this.data.rightViewId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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