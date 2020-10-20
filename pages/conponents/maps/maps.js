// pages/index/maps/maps.js
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
      enableTraffic:true,
      // 显示指南针
      showCompass:true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPosition(){
      var t = this;
      wx.getLocation({
        type: 'gcj02',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          t.setData({
            latitude:latitude,
            longitude:longitude,
            // 标记当前位置
            markers:[{
              iconPath: "/pages/resources/img/user.png",
              id: 0,
              latitude: latitude,
              longitude: longitude,
              width: 50,
              height: 50
            }]
          })
          // const speed = res.speed
          // const accuracy = res.accuracy
        }
       })
    }
  }
})
