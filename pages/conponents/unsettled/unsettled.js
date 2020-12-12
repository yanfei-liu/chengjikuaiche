// pages/conponents/unsettled/unsettled.js
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
    item:{},
    // 是否显示未结算订单
    success:false,
    // 是否显示结算按钮
    orderType:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData:function(){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/getByUserId?uuid='+app.globalData.userId,
        null,
        function(e){
          if(e.success){
            that.setData({success:true})
            that.setData({item:e.data[0]})
          }else{
            that.setData({success:false})
            app.alter2("没有未结算订单",'none')
          }
        },
        function(err){
        }
      )
    },
    // 结算订单
    subOrder:function(e){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/PayMent/prePay?orderSn='+e.target.dataset['call'],
        null,
        function(e){
          if(e.success){
            // 结算
            wx.requestPayment({
              timeStamp: e.payMap.timeStamp,
              nonceStr: e.payMap.nonceStr,
              package: e.payMap.package,
              signType: e.payMap.signType,
              paySign: e.payMap.paySign,
              success (res) {
                console.log(res)
                if(res.errMsg === "requestPayment:ok"){
                  // 通知后台支付成功
                   that.setData({success:false})
                   app.alter2("结算成功",'none')
                }
              },
              fail (res) {
                console.log(res)
              }
            })
          }else{
            app.alter2("结算失败，稍后重试",'none')
          }
        },
        function(err){
        }
      )
    },
  }
})
