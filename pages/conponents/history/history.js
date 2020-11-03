// pages/conponents/history/history.js
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
    orders:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 查询历史订单
    getData:function(){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/findAll?userId='+app.globalData.userId,
        null,
        function(e){
          if(!e.success){
            that.setData({orders:e.data})
          }
        },
        function(err){
          console.log(err)
        }
      )
    }
  }
})
