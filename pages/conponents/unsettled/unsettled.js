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
    success:true,
    // 是否显示结算按钮
    orderType:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetOrder:function(){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/getByUserId?uuid='+app.globalData.userId,
        null,
        function(e){
          if(!e.success){
            that.setData({item:e.data[0]})
          }else{
            that.setData({success:false})
          }
        },
        function(err){
          console.log(err)
        }
      )
    },
    // 结算订单
    subOrder:function(e){
      console.log(e.target.dataset['call'])
    }
  }
})
