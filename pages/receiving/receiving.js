// pages/receiving/receiving.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 路线与地图切换
    m:false,
    // 路线集合
    routes:[],
    success:false,
    msg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 测试
    if(app.globalData.test){
      this.setData({m:true})
      // 测试地图中心在当前位置
      // this.selectComponent("#mapOrder").getPosition()
      // 测试批量地图标记
      this.selectComponent("#mapOrder").getData([{'a':0},{'a':1},{'a':2},{'a':3},{'a':4}])
    }else{
      // 加载所有路线
      this.loadingRoute()
    }
  },
  // 加载路线数据
  loadingRoute:function(){
    const that = this;
    app.wxRequest(
      "GET",
      app.globalData.url+'/route/findAll',
      null,
      function(e){
        that.setData({routes:e})
      },
      function(e){
      }
    )
  },
  // 根据路线获取所有订单
  getOrders:function(e){
    let t = this
    app.wxRequest(
      "GET",
      app.globalData.url+'/route/findAll',
      null,
      function(e){
        if(e.success){
          // 设置地图中心点为当前定位
          t.selectComponent("#mapOrder").getPosition()
          // 批量生成地图标记
          t.selectComponent("#mapOrder").getData(e.data)
        }else{
          // 如果没有订单
          t.setData({success:true})
          t.setData({msg:"当前所选线路暂时没有订单"})
        }
      },
      function(e){
      }
    )
  }
})