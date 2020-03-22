// components/mypage/mypage.js
Component({
  /**
   * 组件的属性列表
   */
  // 组件生命周期
  lifetimes:{
    created:function(){
      console.log("组件刚刚被创建")
    },
    attached:function(){
      console.log("组件加载完毕");
    },
    detached:function(){
      console.log("组件离开")
    },
  },
  pageLifetimes:{
    show:function(){
      console.log("页面展示")
    },
    hide:function(){
      console.log("页面隐藏")
    },
  },
  options:{
    multipleSlots:true
  },
  properties: {

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
    leftEvent:function(e){
      let index = e.currentTarget.dataset.index;
      let detail = {
        "index":index,
        "val":'aaa'
      }
        let option = {}
        this.triggerEvent("bodyEventtap",detail,option)
    }
  }
})
