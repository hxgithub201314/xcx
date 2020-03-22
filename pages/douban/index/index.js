import {
  globalUrl
} from "../../../utils/url.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moves: [],
    tvs: [],
    shows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMovesList();
    this.getTvsList();
    this.getShowsList();
  },

  getMovesList: function() {
    let that = this;
   
    wx.request({
      url: globalUrl.movesList,
      data: {
        count: 7
      },
      success: function(res) {
        let moves = res.data.subject_collection_items
        that.setData({
          moves: moves
        })
      }
    })
  },

  getTvsList: function() {
    let that = this;
    wx.request({
      url: globalUrl.tvsList,
      data: {
        count: 7
      },
      success: function(res) {
        let tvs = res.data.subject_collection_items
        that.setData({
          tvs: tvs
        })
      }
    })
  },

  getShowsList: function() {
    let that = this;
    wx.request({
      url: globalUrl.showsList,
      data: {
        count: 7
      },
      success: function(res) {
        let shows = res.data.subject_collection_items
        that.setData({
          shows: shows
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //不是豆瓣代码  

    //找出数组中最大 小值
    let arr = [1,2,5,3,58,56,95,-1,100];
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));

    let max = arr[0];
    for(let i=0;i<arr.length-1;i++){
      max = max < arr[i+1]?arr[i+1]:max;
    }
    console.log(max);



    // 数组去重
    //indexOf 方法遍历都是数字的数组可以
    //for in 遍历对象  for of遍历数组 不可以获取索引 可以使用break return 终止循环
    let arr1 = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    //let arr1 = [1,52,66,52,9,1,100,52,100,66,48]
    let newArr1 = [];
    for(let item of arr1){
      if(newArr1.indexOf(item) === -1){
        newArr1.push(item);
      }
    }
    console.log(newArr1);
    // es6方法
    console.log(Array.from(new Set(arr1)));
    console.log(...new Set(arr1));

    // js冒泡排序
    let arr2 = [5,78,45,96,59,63,26,45,100,2,5,8,94,55];
    for(let i=0;i<arr2.length-1;i++){
      for(let j=0;j<arr2.length-1-i;j++){
        if(arr2[j] > arr2[j+1]){
          let temp = arr2[j];
          arr2[j] = arr2[j+1];
          arr2[j+1] = temp;
        }
      }
    };
    console.log(arr2);


    // js查找字符串中出现次数最多的字符
    let str = 'asdfssaaasasasasaa';
    let obj = {};
    for(let i=0;i<str.length;i++){
      if(!obj[str.charAt(i)]){
        obj[str.charAt(i)] = 1;
      }else{
        obj[str.charAt(i)]++;
      }
    };

    let maxNumber = 0;
    let name = "";
    for(let item in obj){
      if (maxNumber < obj[item]){
        maxNumber = obj[item];
        name = item
      }
    };
    console.log(maxNumber);
    console.log(name)


    // es6解构赋值
    let options = {
      title:"es6",
      id:'01',
      index:1
    };
    let {title,id} = options;
    console.log(title);
    console.log(id);

    // 交换两个变量的值
    let a = 5;
    let b = 3;
    [a,b] = [b,a];
    console.log(a);
    console.log(b)
  },
})