// pages/conponents/callCon/callCon.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 路线ID
    routeId:null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 是否有未结算订单
    j:true,
    // 提示消息
    jtext:'',
    type:0,
    // 乘坐人数
    presionNumber:1,
    // 联系电话
    phone:null,
    // 上车坐标
    startCoordinate:0,
    // 出发日期
    departureTime:'',
    // 出发时间
    departureTime2:'',
    // 是否包车
    isCharterCar:0,
    // 包车车型
    charterCarType:0,
    // 上车地点
    upCarLatitude:'',
    upCarLongitude:'',
    upCarTxt:'',
    // 下车地点
    dowCarLatitude:'',
    dowCarLongitude:'',
    dowCarTxt:''
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
    // 选择上车地点
    chooseLocationUp:function(e){
      let that = this
      wx.chooseLocation({
        success:function(res){
          that.setData({upCarLatitude:res.latitude})
          that.setData({upCarLongitude:res.longitude})
          that.setData({upCarTxt:res.address})
        }
      })
    },
    // 选择下车地点
    chooseLocationDow:function(e){
      let that = this
      wx.chooseLocation({
        success:function(res){
          that.setData({dowCarLatitude:res.latitude})
          that.setData({dowCarLongitude:res.longitude})
          that.setData({dowCarTxt:res.address})
        }
      })
    },
    // 下单
    sub:function(e){
      const that = this;
      app.wxRequest2(
        "POST",
        app.globalData.url+'/order/save',
        {
          "createPresion":app.globalData.userId,
          "routeId":that.properties.routeId,
          "phone":that.data.phone,
          "presionNumber":that.data.presionNumber,
          "departureTime":that.data.departureTime +" "+ that.data.departureTime2+':00',
          "isCharterCar":that.data.isCharterCar,
          "charterCarType":that.data.charterCarType,
          // 上下车坐标地址
          // 上车地点
          "startCoordinate":that.data.upCarLatitude+';'+that.data.upCarLongitude,
          "startAddress":that.data.upCarTxt,
          // 下车地点
          "endCoordinate":that.data.dowCarLatitude+';'+that.data.dowCarLongitude,
          "endAddress":that.data.dowCarTxt
        },
        function(e){
          // if(e.code === '0'){
            // 请求成功
            that.setData({j:false})
            that.setData({jtext:e.msg})
            // // 跳转至首页
            // wx.navigateTo({
            //   url: "/pages/index/index",
            // })
          // }else{
          //   that.setData({j:false})
          //   that.setData({jtext:e.msg})
          // }
        },
        function(e){
        }
      )
    }
  }
})
