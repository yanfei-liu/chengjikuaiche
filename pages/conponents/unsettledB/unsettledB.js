// pages/conponents/unsettledB/unsettledB.js
const app = getApp()
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
    // 未结算单据实体
    orders:[],
    // 是否显示结算按钮
    orderType:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData:function(){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/findBySiJiUserId?uuid='+app.globalData.userId,
        null,
        function(e){
          if(!e.success){
            that.setData({orders:e})
          }else{
            app.alter2("没有未完成订单",'none')
          }
        },
        function(err){
        }
      )
    },
    // 更改订单为乘客已上车
    changeUpCar:function(e){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/updateOrderTypeByOrderSn?orderSn='+e.target.dataset['call']+"&type=2",
        null,
        function(e){
          if(e.success){
            app.alter2("",'success')
            that.getData()
          }else{
            app.alter2("订单状态更改失败",'none')
          }
        },
        function(err){
        }
      )
    },
    // 更给订单为乘客下车未结算状态
    changeSettlement:function(e){
      let t = this;
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
                app.wxRequest(
                  "GET",
                  app.globalData.url+'/order/updateOrderOutCar?orderSn='+e.target.dataset['call']+"&coordinate="+latitude+";"+longitude,
                  null,
                  function(e){
                    if(e.success){
                      app.alter2("",'success')
                      t.getData()
                    }else{
                      app.alter2("订单状态更改失败",'none')
                    }
                  },
                  function(err){
                  }
                )
              }
            })
          }else{
            wx.authorize({
              scope: 'scope.userLocation',
              success:function(res){
                // 授权成功
                t.changeSettlement(e);
              }
            })
          }
        }
      })
    }
  }
})