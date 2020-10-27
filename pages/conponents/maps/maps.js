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
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // getPosition(){
    //   var t = this;
    //   wx.getLocation({
    //     type: 'gcj02',
    //     success (res2) {
    //       // 实时定位
    //       wx.startLocationUpdateBackground({
    //         success: (res) => {
    //           console.log('startLocationUpdate-res', res)
    //           const latitude = res.latitude
    //           const longitude = res.longitude
    //           t.setData({
    //             latitude:latitude,
    //             longitude:longitude,
    //             // 标记当前位置
    //             markers:[{
    //               iconPath: "/pages/resources/img/user.png",
    //               id: 0,
    //               latitude: latitude,
    //               longitude: longitude,
    //               width: 50,
    //               height: 50
    //             }]
    //           })
    //         },
    //         fail: (err) => {
    //           console.log('startLocationUpdate-err', err)
    //         }
    //       })
    //     }
    //    })
    // }
    getPositionAuto(){
      let that = this;
      that.getPosition()
      // setInterval(function(){
      //   that.getPosition()
      // },15*1000);
    },
    getPosition(){
      var t = this;
      // 获取所有的授权信息
      wx.getSetting({
        success(res) {
          console.log(res)
          // 判断手机有没有开启定位
          wx.getSystemInfo({
            success(r2) {
              var isopendingwei = r2.locationEnabled;
              if(isopendingwei==false){
                console.log("请先开启手机GPS定位")
              }else{
                // 判断有没有scope.userLocationBackground授权
                if (res.authSetting['scope.userLocationBackground']) {
                  // 获取用户位置信息
                  wx.getLocation({
                    type: 'gcj02',
                    success: (r) => {
                      console.log('startLocationUpdate-res', r)
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
                  console.log('请在设置页面授予位置权限');
                }
              }
            }
          })
        }
      })  
    }
  }
})
