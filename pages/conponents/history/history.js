// pages/conponents/history/history.js
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
    init:function(){
      let that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/findAll?uuid='+app.globalData.userId,
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
