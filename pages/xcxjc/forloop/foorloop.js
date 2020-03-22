// pages/xcxjc/forloop/foorloop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     books:['三国演义','水浒传','红楼梦','西游记'],
     lines:[
       {
         id:1,
         name:"switch1"
       },
       {
         id: 2,
         name: "switch2"
       },
       {
         id: 3,
         name: "switch3"
       },
       {
         id: 4,
         name: "switch4"
       }
     ]
  },

  tapEvent:function(e){
    let lines = this.data.lines;
    lines.splice(0,0,{
      id: 5,
      name: "switch5"
    })
    this.setData({
      lines:lines
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },
})