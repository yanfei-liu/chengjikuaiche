// pages/conponents/mapOrder/mapOrder.js
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
    latitude:0,
    longitude:0,
    markers: [],
    setting:{
      // 显示实时路况
      enableTraffic:false,
      // 显示指南针
      showCompass:true
    },
    // order view
    orderView:false,
    // 出发地
    startAddress:'',
    // 目的地
    endAddress:'',
    // 出发时间
    departureTime:'',
    // 是否包车
    isCharterCar:'',
    // 乘坐人数
    presionNumber:'',
    // 订单编号
    orderSn:'',
    // 用于刷新页面
    eData:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toInit(e){
      this.setData({eData:e})
      // 批量生成地图标记
      this.getData(e)
    },
    // 批量生成标记
    getData(e){
      let t = this;
      let markers = [];
      for(let i = 0; i < e.length;i++){
        // 分割出经纬度
        let latLon = e[i].startCoordinate.split(";")
        markers = markers.concat({
          iconPath: "/pages/resources/img/user.png",
          id: e[i].orderSn,
          latitude: latLon[0],
          longitude: latLon[1],
          width: 20,
          height: 20,
          callout: {
            content:e[i].startAddress+"\n"+e[i].endAddress,
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
      // e.markerId
      // 显示订单信息窗口
      this.setData({orderView:true})
      let t = this
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/getOneByOrderSn?orderSn='+e.markerId,
        null,
        function(e){
          if(e.success){
            t.setData({startAddress:e.data.startAddress})
            t.setData({endAddress:e.data.endAddress})
            t.setData({departureTime:e.data.departureTime})
            t.setData({isCharterCar:e.data.isCharterCar})
            t.setData({presionNumber:e.data.presionNumber})
            t.setData({orderSn:e.data.orderSn})
          }else{

          }
        },
        function(e){
        }
      )
    },
    // 关闭订单详情
    toClose(e){
      this.setData({orderView:false})
    },
    // 接单
    toAccept(e){
      let t = this
      app.wxRequest(
        "GET",
        app.globalData.url+'/order/updateJieDan?orderSn='+t.data.orderSn+"&uuid="+app.globalData.userId,
        null,
        function(e){
          console.log(e)
          if(e.success){
            console.log("接单成功")
            t.toInit(t.data.eData)
          }else{

          }
        },
        function(e){
        }
      )
    }
  }
})
