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
    routes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 测试
    if(app.globalData.test){
      this.setData({m:true})
      // 测试批量地图标记
      // this.selectComponent("#mapOrder").getData([{'a':0},{'a':1},{'a':2},{'a':3},{'a':4}])
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
        console.log(e)
      }
    )
  },
  // 根据路线获取所有订单
  getOrders:function(e){
    app.wxRequest(
      "GET",
      app.globalData.url+'/route/findAll',
      null,
      function(e){
        console.log(e)
      },
      function(e){
        console.log(e)
      }
    )
  }
})