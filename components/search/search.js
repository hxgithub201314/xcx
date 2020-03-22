// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     isNavigator:{
       type:Boolean,
       value:false
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onIunputSearch:function(e){
      let searchVal = e.detail.value;
      let detail = { "value": searchVal};
      let options = {};
      this.triggerEvent("searchInput",detail,options)
    }
  }
})
