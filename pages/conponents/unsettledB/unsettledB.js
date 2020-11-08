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
    // 是否显示未结算订单
    success:true,
    // 是否显示结算按钮
    orderType:0,
    // 是否计算成功
    success2:false,
    // 消息
    msg:''
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
            that.setData({success:false})
            that.setData({msg:"没有未完成订单"})
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
            that.getData()
          }else{
            that.setData({success:false})
            that.setData({msg:"操作失败"})
          }
        },
        function(err){
        }
      )
    },
    // 更给订单为乘客未结算状态
    changeSettlement:function(e){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/updateOrderTypeByOrderSn?orderSn='+e.target.dataset['call']+"&type=3",
        null,
        function(e){
          if(e.success){
            that.getData()
          }else{
            that.setData({success:false})
            that.setData({msg:"操作失败"})
          }
        },
        function(err){
        }
      )
    }
  }
})