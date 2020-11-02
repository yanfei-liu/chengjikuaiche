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
    getPosition(){
      var t = this;
      // 获取所有的授权信息
      wx.getSetting({
        success(res) {
          // 判断有没有scope.userLocation授权
          if (res.authSetting['scope.userLocation']) {
            // 获取用户位置信息
            wx.getLocation({
              type: 'gcj02',
              // 开启高精度定位
              // isHighAccuracy:true,
              // 高精度定位超时时间,3000ms以上才有效果
              // highAccuracyExpireTime:5000,
              success: (r) => {
                const latitude = r.latitude
                const longitude = r.longitude
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
              },
              fail: (err) => {
                console.log('startLocationUpdate-err', err)
              }
            })
          }else{
            wx.authorize({
              scope: 'scope.userLocation',
              success:function(res){
                // 授权成功
                t.getPosition();
              },
              fail:function(err){
                console.log('授权失败');
              },
            })
          }
        }
      })  
    }
  }
})
