// pages/conponents/callCon/callCon.js
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
    type:0,
    // 乘坐人数
    presionNumber:1,
    // 联系电话
    phone:null,
    // 上车坐标
    startCoordinate:0,
    // 路线ID
    routeId:null,
    // 出发日期
    departureTime:'',
    // 出发时间
    departureTime2:'',
    // 是否包车
    isCharterCar:0,
    // 包车车型
    charterCarType:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputHandle(e){
      var p = e.target.dataset['prop'];
      var changed = {};
      changed[p] = e.detail.value;
      this.setData(changed);
    },
    setType(e){
      this.data.type = e
    },
    // 下单
    sub:function(e){
      const that = this;
      app.wxRequest2(
        "POST",
        app.globalData.url+'/order/save',
        {
          "phone":that.data.phone,
          "presionNumber":that.data.presionNumber,
          // "departureTime":that.data.departureTime +" "+ that.data.departureTime2,
          "isCharterCar":that.data.isCharterCar,
          "charterCarType":that.data.charterCarType
        },
        function(e){
          // 跳转至首页
          // wx.navigateTo({
          //   url: "/pages/index/index",
          // })
        },
        function(e){
          console.log(e)
        }
      )
    }
  }
})
