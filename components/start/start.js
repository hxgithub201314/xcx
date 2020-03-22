// components/start/start.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     rate:{
       type:Number,
       value:0,
       observer: function(newVal, oldVal) {
        // 属性值变化时执行   rate变化时调用
         this.updateRate();
      }
 
     },
     startsize:{
       type:Number,
       value:20 //rpx
     },
     fontsize:{
       type:Number,
       value:20
     },
     color:{
       type:String,
       value:"#ccc"
     },
     istext:{
       type:Boolean,
       value:true
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lights:[],
    halfs:[],
    grays:[],
    rateText:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate:function(){
      let that = this;
      let rate = that.properties.rate;
      let intRate = parseInt(rate);//评分可以带小数  取整
      let light = parseInt(intRate / 2); //高亮个数
      let half = intRate % 2;  //半高亮
      let gray = 5 - light - half;//灰色

      let lights = [];
      let halfs = [];
      let grays = [];
      //渲染star 个数
      for (let index = 1; index <= light; index++) {
        lights.push(index)
      }
      for (let index = 1; index <= half; index++) {
        halfs.push(index)
      }
      for (let index = 1; index <= gray; index++) {
        grays.push(index)
      }
      let rateText = rate && rate >= 0 ? rate.toFixed(1) : "暂无评分";
      that.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        rateText: rateText
      })
    }
  },
  lifetimes:{
    // attached 加载dom节点时触发  导致rate数据未返回 使用默认值
    attached:function(e){
      this.updateRate();
    }
  }
})
