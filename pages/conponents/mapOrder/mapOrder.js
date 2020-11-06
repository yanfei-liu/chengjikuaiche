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
    }
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
              success: (r) => {
                const latitude = r.latitude
                const longitude = r.longitude
                t.setData({
                  latitude:latitude,
                  longitude:longitude
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
    },
    // 批量生成标记
    getData(e){
      let t = this;
      let arr = [];
      for(let i = 0; i < e.length;i++){
        let a = {
          iconPath: "/pages/resources/img/user.png",
          id: i,
          latitude: t.data.latitude+(i*0.01),
          longitude: t.data.longitude+(i*0.01),
          width: 50,
          height: 50
        }
        arr.push(a)
        t.setData({markers:arr})
      }
      console.log(t.data.markers)
    }
  }
})
