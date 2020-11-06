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
              },
            })
          }
        }
      })  
    },
    // 批量生成标记
    getData(e){
      let t = this;
      let markers = [];
      for(let i = 0; i < e.length;i++){
        markers = markers.concat({
          iconPath: "/pages/resources/img/user.png",
          id: "路线"+i,
          latitude: i*0.01,
          longitude: i*0.01,
          width: 20,
          height: 20,
          callout: {
            content:"测试",
            display:'BYCLICK',
            fontSize: '32',
            padding: true,
            color:'#444',
            textAlign: 'center',
            borderRadius: 15
          }
        });
      }
      t.setData({markers:markers})
    },
    // 点击地图marker获取该订单信息
    getOrder(e){
      // markerId
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/save',
        null,
        function(e){
        },
        function(e){
        }
      )
    }
  },
})
