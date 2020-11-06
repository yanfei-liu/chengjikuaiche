// pages/conponents/mapOrder/mapOrder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    markers: [],
    setting:{
      // 显示实时路况
      enableTraffic:false,
      // 显示指南针
      showCompass:true
    },
    // map对象
    myMap:null
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 批量生成标记
    getData:function(e){
      let arr = [];
      for(let i = 0; i < e.length();i++){
        arr.push(e[i])
      }
      console.log(arr)
      // markers:[{
      //   iconPath: "/pages/resources/img/user.png",
      //   id: 0,
      //   latitude: latitude,
      //   longitude: longitude,
      //   width: 50,
      //   height: 50
      // }]
    }
  }
})
