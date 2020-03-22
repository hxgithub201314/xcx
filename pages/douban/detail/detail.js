import { globalUrl } from "../../../utils/url.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     item:[],
    genres:[],
  
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type;
    let id = options.id;
    this.setData({
      type:type,
      id:id
    })
    let that = this;
    if(type === "move"){
      this.moveDetail(id);
      // 标签
      wx.request({
        url: globalUrl.moveTags(id),
        success:function(res){
          that.detailTags(res);
        }
      })
      //短评
      wx.request({
        url: globalUrl.moveComments(id),
        success:function(res){
          that.detailComments(res);
        }
      })
    }else if(type === "tv"){
      this.tvDetail(id);
      wx.request({
        url: globalUrl.tvTags(id),
        success: function (res) {
          that.detailTags(res);
        }
      });
      wx.request({
        url: globalUrl.tvComments(id),
        success: function (res) {
          that.detailComments(res);
        }
      })
    }else{
      this.showDetail(id);
      wx.request({
        url: globalUrl.showTags(id),
        success: function (res) {
          that.detailTags(res);
        }
      });
      wx.request({
        url: globalUrl.showComments(id),
        success: function (res) {
          that.detailComments(res);
        }
      })
    }
  },
  moveDetail:function(id){
    let that = this;
    wx.request({
      url: globalUrl.movieDetail+id,
      success:function(res){
         that.detailHeader(res);
      }
    })
  },
  tvDetail:function(id){
    let that = this;
    wx.request({
      url: globalUrl.tvDetail + id,
      success: function (res) {
        that.detailHeader(res);
      }
    })
  },
  showDetail: function (id) {
    let that = this;
    wx.request({
      url: globalUrl.showDetail + id,
      success: function (res) {
        that.detailHeader(res);
      }
    })
  },
  // 详情页头部
  detailHeader:function(res){
    let genres = res.data.genres.join("/")
    let actors = res.data.actors;
    let actorsName = [];
    if (actors.length > 3) {
      actors = actors.slice(0, 3);
    }
    for (let i in actors) {
      actorsName.push(actors[i].name)
    };
    actorsName = actorsName.join("/");
    let director;
    let authors;
    if (res.data.directors.lenght == undefined
    ){
      director = "";
      authors = actorsName;
    }else{
      director = res.data.directors[0].name;
      authors = director + "(导演) /" + actorsName;
    }
    this.setData({
      item: res.data,
      genres: genres,
      authors: authors,

    })
    console.log(this.data.item)
  },

  //标签
  detailTags:function(res){
     let tags = [];
     this.setData({
       tags:res.data.tags
     })
  },
detailComments:function(res){
  console.log(res);
  let total = res.data.total;
  let comments = res.data.interests;

  this.setData({
    total: total,
    comments: comments
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
     wx.pageScrollTo({
       scrollTop: 0,
     })
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