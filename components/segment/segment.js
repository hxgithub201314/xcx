// components/segment/segment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     items:{
       type:Array,
       value:[]
     },
     defaultIndex:{
       type:Number,
       value:0
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:0,
  },

  lifetimes:{
    attached:function(){
      let that = this;
      that.setData({
        currentIndex:that.properties.defaultIndex
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeActive:function(e){
      let index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      })
      let detail ={"index":index}
      let options = {}
      this.triggerEvent("pageIndex",detail,options);
    }
  }
})
